export function CustomersMothlyRewardPoints({ monthlyRewardPoints }) {
  return (
    <div className="card">
      <h2>Monthly Customer's Reward Points</h2>
      <div className="customer-table">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Month</th>
              <th data="number">Reward Points</th>
            </tr>
          </thead>

          <tbody>
            {Object.values(monthlyRewardPoints).length === 0 ? (
              <tr class="no-data-row">
                <td colSpan="3">No records found.</td>
              </tr>
            ) : (
              Object.values(monthlyRewardPoints).map(({ name, months }) =>
                Object.entries(months).map(([month, points]) => (
                  <tr key={name + month}>
                    <td>{name}</td>
                    <td>{month}</td>
                    <td data="number">{Math.round(points)}</td>
                  </tr>
                )),
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
