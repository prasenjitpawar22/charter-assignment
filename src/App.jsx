import "@/styles/App.css";
import { CustomersTotalTransactions } from "@/components/customers-total-transactions";
import { transactionsData } from "@/db/index";
import { getRewardPoints } from "@/utils/functions";
import { useState, useEffect, useMemo } from "react";
import { CustomersMothlyRewardPoints } from "./components/customers-monthly-reward-points";
import { CustomersTotalRewardPoints } from "./components/customers-total-reward-points";
import { compareDesc, parse } from "date-fns";
import { filterLastXMonths } from "@/utils/date-utils";
import Select from "./components/form/select";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastXMonths, setLastXMonths] = useState(3);

  const TotalRewardPoints = useMemo(() => {
    const lastXMonthsData = filterLastXMonths(data, lastXMonths);

    return lastXMonthsData.reduce((accumulator, value) => {
      const sales = value.sales;
      const points = getRewardPoints(sales);

      accumulator[value.customerId] = {
        name: value.customerName,
        totalPoints: (accumulator[value.customerId]?.totalPoints || 0) + points,
      };

      return accumulator;
    }, {});
  }, [data, lastXMonths]);

  const transactionsRewardPoints = useMemo(() => {
    const lastXMonthsData = filterLastXMonths(data, lastXMonths);

    return lastXMonthsData
      .map((data) => {
        const sales = data.sales;
        const points = getRewardPoints(sales);

        return { ...data, rewardPoints: points };
      })
      .sort((a, b) =>
        compareDesc(
          parse(a.orderDate, "dd/MM/yyyy", new Date()),
          parse(b.orderDate, "dd/MM/yyyy", new Date()),
        ),
      );
  }, [data, lastXMonths]);

  const monthlyRewardPoints = useMemo(() => {
    const lastXMonthsData = filterLastXMonths(data, lastXMonths);

    return lastXMonthsData.reduce((accumulator, value) => {
      const id = value.customerId;
      const name = value.customerName;
      const sales = value.sales;
      const points = getRewardPoints(sales);
      const date = parse(value.orderDate, "dd/MM/yyyy", new Date());

      const month = date.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });

      if (!accumulator[id]) {
        accumulator[id] = { name, months: {} };
      }

      // Add month bucket
      if (!accumulator[id].months[month]) {
        accumulator[id].months[month] = 0;
      }

      accumulator[id].months[month] += points;

      return accumulator;
    }, {});
  }, [data, lastXMonths]);

  // simulate fetching data from an API with a delay of 5 seconds.
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await new Promise((res) => {
          setTimeout(() => {
            res(transactionsData);
          }, 2 * 1000);
        });
        setData(response);
      } catch (error) {
        // toast error message.
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div className="skeleton">Loading data</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section>
      <Select
        label={"Filter by month"}
        name={"months"}
        value={lastXMonths}
        options={[
          { value: 3, label: "Last 3 months" },
          { value: 7, label: "Last 7 months" },
          { value: 12, label: "Last 12 months" },
          { value: 14, label: "Last 14 months" },
          { value: 24, label: "Last 24 months" },
          { value: 0, label: "All records" },
        ]}
        onChange={(e) => {
          setLastXMonths(Number(e));
        }}
      />
      <h1>Customer's {lastXMonths.toString() || "All"} months Data</h1>
      <div className="table-container">
        <CustomersTotalTransactions
          transactionsRewardPoints={transactionsRewardPoints}
        />
        <CustomersMothlyRewardPoints
          monthlyRewardPoints={monthlyRewardPoints}
        />
        <CustomersTotalRewardPoints TotalRewardPoints={TotalRewardPoints} />
      </div>
    </section>
  );
}

export default App;
