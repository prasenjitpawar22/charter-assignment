export function CustomersTotalTransactions({ transactionsRewardPoints }) {

  return (
    <div>
      <h2>Total Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th data="number">Sales</th>
            <th data="number">Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactionsRewardPoints.map((data) => (
            <tr key={data["Row ID"]}>
              <td>{data["Order ID"]}</td>
              <td>{data["Customer Name"]}</td>
              <td>{data["Order Date"]}</td>
              <td data="number"> ${data["Sales"].toFixed(2)}</td>
              <td data="number"> {Math.round(data.rewardPoints)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
