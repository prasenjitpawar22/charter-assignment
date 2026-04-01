export function CustomersTotalRewardPoints({ TotalRewardPoints }) {
  return (
    <div>
      <h2>Total Customer's Rewards</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th data="number">Total Reward Points</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(TotalRewardPoints).map(({ name, totalPoints }) => (
              <tr key={name}>
                <td>{name}</td>
                <td data="number">{Math.round(totalPoints)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
