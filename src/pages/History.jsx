import Card from '../components/Card.jsx';

const historyItems = [
  { date: '2026-04-26', amount: '$1,200', currency: 'EUR', status: 'Success' },
  { date: '2026-04-25', amount: '$780', currency: 'GBP', status: 'Pending' },
  { date: '2026-04-24', amount: '$2,300', currency: 'JPY', status: 'Success' },
  { date: '2026-04-22', amount: '$450', currency: 'USD', status: 'Success' },
];

export default function History() {
  return (
    <section className="page history-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Trade log</span>
          <h2>Payment history</h2>
          <p>Review your recent conversions and check the status of each transaction.</p>
        </div>
      </div>
      <Card className="table-card">
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {historyItems.map((item) => (
              <tr key={`${item.date}-${item.amount}`}>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                <td>
                  <span className={`badge ${item.status === 'Success' ? 'positive' : 'warning'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
