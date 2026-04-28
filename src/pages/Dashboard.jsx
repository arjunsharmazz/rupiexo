import Card from '../components/Card.jsx';

const activityItems = [
  { label: 'EUR conversion', value: '+1,250', status: 'Completed' },
  { label: 'USD transfer', value: '+980', status: 'Pending' },
  { label: 'Balance update', value: '+4,520', status: 'Completed' },
];

export default function Dashboard() {
  return (
    <section className="page dashboard-page">
      <div className="dashboard-grid">
        <Card className="sidebar-card glass-card">
          <div className="card-header">
            <span>Overview</span>
            <strong>Workspace</strong>
          </div>
          <nav className="dashboard-nav">
            <a href="/exchange">Exchange</a>
            <a href="/rates">Rates</a>
            <a href="/history">History</a>
            <a href="/admin">Admin</a>
          </nav>
        </Card>

        <div className="dashboard-main">
          <div className="metric-grid">
            <Card className="metric-card">
              <span>Total transactions</span>
              <strong>1,376</strong>
            </Card>
            <Card className="metric-card">
              <span>Balance</span>
              <strong>$48,590</strong>
            </Card>
            <Card className="metric-card glass-card">
              <span>Active channels</span>
              <strong>6 markets</strong>
            </Card>
          </div>

          <Card className="activity-card">
            <div className="card-header">
              <span>Recent activity</span>
              <strong>Latest moves</strong>
            </div>
            <ul className="activity-list">
              {activityItems.map((item) => (
                <li key={item.label}>
                  <div>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                  <span className={`badge ${item.status === 'Completed' ? 'positive' : 'neutral'}`}>
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
