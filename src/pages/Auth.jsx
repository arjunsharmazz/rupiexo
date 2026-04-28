import { useState } from 'react';
import Card from '../components/Card.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

export default function Auth() {
  const [mode, setMode] = useState('login');
  const toggleMode = () => setMode(mode === 'login' ? 'signup' : 'login');

  return (
    <section className="page auth-page">
      <Card className="auth-card glass-card">
        <div className="auth-hero">
          <span className="eyebrow">Secure access</span>
          <h2>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
          <p>Access your rupiexoExchange dashboard with a secure, fast login flow.</p>
        </div>
        <form className="auth-form">
          {mode === 'signup' && <Input label="Full name" name="name" />}
          <Input label="Email address" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <Button type="submit">{mode === 'login' ? 'Sign in' : 'Create account'}</Button>
        </form>
        <button type="button" className="mode-switch" onClick={toggleMode}>
          {mode === 'login' ? 'Create a new account' : 'Already have an account? Sign in'}
        </button>
      </Card>
    </section>
  );
}
