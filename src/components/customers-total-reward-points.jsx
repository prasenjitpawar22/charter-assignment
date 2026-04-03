export function CustomersTotalRewardPoints({ TotalRewardPoints }) {
  return (
    <div className="card">
      <h2>Total Customer's Rewards</h2>
      <div className="customer-table">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th data="number">Total Reward Points</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(TotalRewardPoints).length === 0 ? (
              <tr class="no-data-row">
                <td colSpan="2">No records found.</td>
              </tr>
            ) : (
              Object.values(TotalRewardPoints).map(({ name, totalPoints }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td data="number">{Math.round(totalPoints)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
