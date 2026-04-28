import { useMemo, useState } from 'react';
import Card from '../components/Card.jsx';
import Input from '../components/Input.jsx';

const currencyData = [
  { currency: 'USD', rate: 1.00, change: 0.12 },
  { currency: 'EUR', rate: 0.92, change: -0.06 },
  { currency: 'GBP', rate: 0.79, change: 0.05 },
  { currency: 'JPY', rate: 133.41, change: 0.18 },
  { currency: 'AUD', rate: 1.48, change: -0.04 },
  { currency: 'CAD', rate: 1.36, change: 0.10 },
];

export default function Rates() {
  const [query, setQuery] = useState('');

  const filteredRates = useMemo(() => {
    return currencyData.filter((item) => item.currency.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <section className="page rates-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Live asset tracking</span>
          <h2>Currency rates</h2>
          <p>Search the latest exchange data and compare performance at a glance.</p>
        </div>
        <div className="search-panel card glass-card">
          <Input label="Search currencies" value={query} onChange={(e) => setQuery(e.target.value)} placeholder=" " />
        </div>
      </div>

      <Card className="table-card">
        <table className="rates-table">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate</th>
              <th>Change %</th>
            </tr>
          </thead>
          <tbody>
            {filteredRates.map((item) => (
              <tr key={item.currency}>
                <td>{item.currency}</td>
                <td>{item.rate.toFixed(2)}</td>
                <td className={item.change >= 0 ? 'badge positive' : 'badge negative'}>
                  {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
