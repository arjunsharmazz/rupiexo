import { useState } from 'react';
import Card from '../components/Card.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

const users = [
  { name: 'Ari Taylor', role: 'Trader', email: 'ari@rupiexo.com' },
  { name: 'Mina Lee', role: 'Manager', email: 'mina@rupiexo.com' },
  { name: 'Cole Hart', role: 'Admin', email: 'cole@rupiexo.com' },
];

export default function Admin() {
  const [rate, setRate] = useState('0.92');
  const [currency, setCurrency] = useState('EUR');

  return (
    <section className="page admin-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Control center</span>
          <h2>Admin panel</h2>
          <p>Manage platform users and currency rates from a secure admin interface.</p>
        </div>
      </div>

      <div className="page-grid grid-2">
        <Card className="admin-card glass-card">
          <div className="card-header">
            <span>Manage users</span>
            <strong>Access list</strong>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="admin-card glass-card">
          <div className="card-header">
            <span>Manage rates</span>
            <strong>Update quote</strong>
          </div>
          <form className="admin-form">
            <Input label="Currency" value={currency} onChange={(e) => setCurrency(e.target.value)} />
            <Input label="Rate" type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
            <Button>Save rate</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
