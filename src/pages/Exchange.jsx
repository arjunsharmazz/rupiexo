import { useState } from 'react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

export default function Exchange() {
  const [amount, setAmount] = useState('450');
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('GBP');
  const [rate, setRate] = useState(0.79);
  const [fee] = useState(0.0075);

  const finalAmount = (Number(amount) * rate * (1 - fee)).toFixed(2);
  const feeValue = (Number(amount) * rate * fee).toFixed(2);

  return (
    <section className="page exchange-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Advanced control</span>
          <h2>Exchange workspace</h2>
          <p>Review rates, fees, and outcomes before you confirm your next conversion.</p>
        </div>
      </div>
      <div className="page-grid grid-2">
        <Card>
          <div className="card-header">
            <span>Advanced converter</span>
            <strong>Precision controls</strong>
          </div>
          <div className="field-grid">
            <label className="floating-group">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="floating-input"
                placeholder=" "
              />
              <span className="floating-label">Amount</span>
            </label>
            <label className="floating-group">
              <select className="floating-input" value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)}>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
              <span className="floating-label">From</span>
            </label>
            <label className="floating-group">
              <select className="floating-input" value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)}>
                <option>GBP</option>
                <option>EUR</option>
                <option>USD</option>
              </select>
              <span className="floating-label">To</span>
            </label>
          </div>
          <div className="metrics-row">
            <div>
              <span>Exchange rate</span>
              <strong>1 {currencyFrom} = {rate} {currencyTo}</strong>
            </div>
            <div>
              <span>Fee</span>
              <strong>{(fee * 100).toFixed(2)}%</strong>
            </div>
          </div>
          <div className="final-tile">
            <span>Final amount</span>
            <strong>{finalAmount} {currencyTo}</strong>
          </div>
          <Button>Confirm exchange</Button>
        </Card>

        <Card className="insight-panel glass-card">
          <div className="insight-block">
            <strong>Flow metrics</strong>
            <p>Track currency direction and outcome with instant visibility.</p>
          </div>
          <div className="insight-list">
            <div>
              <span>Projected delivery</span>
              <strong>2 min</strong>
            </div>
            <div>
              <span>Liquidity pool</span>
              <strong>High</strong>
            </div>
            <div>
              <span>Quote expires</span>
              <strong>10m</strong>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
