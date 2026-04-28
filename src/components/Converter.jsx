import Button from './Button.jsx';
import Input from './Input.jsx';

export default function Converter({ amount, currencyFrom, currencyTo, onChange, onSwap, onConvert, result }) {
  return (
    <div className="converter card wide-card">
      <div className="converter-row">
        <Input label="Amount" name="amount" value={amount} onChange={onChange} type="number" />
        <div className="currency-group">
          <label className="select-label">From</label>
          <select name="currencyFrom" value={currencyFrom} onChange={onChange} className="select-control">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <button className="swap-btn" type="button" onClick={onSwap} aria-label="Swap currencies">
          ↔
        </button>
        <div className="currency-group">
          <label className="select-label">To</label>
          <select name="currencyTo" value={currencyTo} onChange={onChange} className="select-control">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
      </div>
      <div className="converter-actions">
        <Button variant="secondary" onClick={onSwap}>Swap</Button>
        <Button onClick={onConvert}>Convert</Button>
      </div>
      <div className="converter-result">
        <span>Estimated result</span>
        <strong>{result}</strong>
      </div>
    </div>
  );
}
