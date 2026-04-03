export function CustomersTotalTransactions({ transactionsRewardPoints }) {
  if (!transactionsRewardPoints || transactionsRewardPoints.length === 0) {
    return (
      <div className="card">
        <h2>Total Transactions</h2>
        <div className="customer-table">
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Order Date</th>
                <th data="number">Sales</th>
                <th data="number">Reward Points</th>
              </tr>
            </thead>
            <tbody>
              <tr class="no-data-row">
                <td colSpan="5">No records found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Total Transactions</h2>
      <div className="customer-table">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th data="number">Sales</th>
              <th data="number">Reward Points</th>
            </tr>
          </thead>
          <tbody>
            {transactionsRewardPoints.map((data, i) => (
              <tr key={i}>
                <td>{data.customerName}</td>
                <td>{data.orderDate}</td>
                <td data="number"> ${data.sales.toFixed(2)}</td>
                <td data="number"> {Math.round(data.rewardPoints)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
