import "@/App.css";
import { CustomersTotalTransactions } from "@/components/customers-total-transactions";
import { transactionsData } from "@/db/index";
import { getRewardPoints, parseDate } from "@/utils/functions";
import { useState, useEffect, useMemo } from "react";
import { CustomersMothlyRewardPoints } from "./components/customers-monthly-reward-points";
import { CustomersTotalRewardPoints } from "./components/customers-total-reward-points";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const TotalRewardPoints = useMemo(() => {
    return data.reduce((acc, d) => {
      const sales = d["Sales"];
      const points = getRewardPoints(sales);

      acc[d["Customer ID"]] = {
        name: d["Customer Name"],
        totalPoints: (acc[d["Customer ID"]]?.totalPoints || 0) + points,
      };

      return acc;
    }, {});
  }, [data]);

  const transactionsRewardPoints = useMemo(() => {
    return data.map((d) => {
      const sales = d["Sales"];
      const points = getRewardPoints(sales);

      return { ...d, rewardPoints: points };
    });
  }, [data]);

  const monthlyRewardPoints = useMemo(() => {
    return data.reduce((acc, d) => {
      const id = d["Customer ID"];
      const name = d["Customer Name"];
      const sales = d["Sales"];
      const points = getRewardPoints(sales);
      const date = parseDate(d["Order Date"]);

      const month = date.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });

      if (!acc[id]) {
        acc[id] = { name, months: {} };
      }

      // Add month bucket
      if (!acc[id].months[month]) {
        acc[id].months[month] = 0;
      }

      acc[id].months[month] += points;

      return acc;
    }, {});
  }, [data]);

  console.log(monthlyRewardPoints);

  // simulate fetching data from an API with a delay of 5 seconds.
  useEffect(() => {
    (async () => {
      try {
        const response = await new Promise((res) => {
          setTimeout(() => {
            res(transactionsData);
          }, 500);
        });
        setData(response);
      } catch (error) {
        // toast error message.
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div className="skeleton"></div>;
  }

  return (
    <section>
      <h1>Customer's 3 months Data</h1>
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
