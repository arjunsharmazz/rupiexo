import { useState } from 'react';
import Card from '../components/Card.jsx';
import Converter from '../components/Converter.jsx';
import Button from '../components/Button.jsx';

const dummyRate = 0.92;

const features = [
  {
    title: 'Lightning Fast',
    description: 'Convert currencies in milliseconds. Real-time quotes backed by live market data.',
    icon: '⚡',
  },
  {
    title: 'Zero Hidden Fees',
    description: 'Transparent pricing model. Know exactly what you pay before confirming.',
    icon: '💎',
  },
  {
    title: 'Global Coverage',
    description: 'Support for 150+ currencies and counting. Reach any market worldwide.',
    icon: '🌍',
  },
  {
    title: 'Bank-Grade Security',
    description: 'Encrypted transactions, 2FA protection, and compliance with all global standards.',
    icon: '🔒',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, GlobalTrade Inc',
    feedback: 'Rupiexo cut our forex processing time by 70%. The interface is so clean and intuitive.',
    rating: 5,
  },
  {
    name: 'Marcus Okonkwo',
    role: 'CFO, FinServe Solutions',
    feedback: 'The best currency platform we\'ve used. Support team is responsive and knowledgeable.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Trader, Ascent Capital',
    feedback: 'Competitive rates, zero spreads, and real-time updates. Exactly what traders need.',
    rating: 5,
  },
];

const benefits = [
  { label: '1M+', value: 'Active Users' },
  { label: '$50B+', value: 'Transactions' },
  { label: '< 2s', value: 'Avg. Conversion' },
  { label: '150+', value: 'Currencies' },
];

export default function Home() {
  const [amount, setAmount] = useState('100');
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [result, setResult] = useState('92.00 EUR');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'amount') setAmount(value);
    if (name === 'currencyFrom') setCurrencyFrom(value);
    if (name === 'currencyTo') setCurrencyTo(value);
  };

  const handleSwap = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  };

  const handleConvert = () => {
    const converted = Number(amount || 0) * dummyRate;
    setResult(`${converted.toFixed(2)} ${currencyTo}`);
  };

  return (
    <section className="page home-page">
      {/* Hero Section */}
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Premium fintech exchange</div>
          <h2>Smart Currency Exchange</h2>
          <p>
            Send, convert, and manage currency with a polished interface built for
            traders and businesses who want speed with clarity. Join over 1 million users
            managing global transactions with confidence.
          </p>
          <div className="hero-stats">
            <div>
              <strong>24/7 support</strong>
              <span>Global fiat coverage</span>
            </div>
            <div>
              <strong>0.9% fee</strong>
              <span>Transparent pricing</span>
            </div>
          </div>
          <div className="hero-cta">
            <Button>Get started free</Button>
            <a href="/rates" className="link-btn">View live rates →</a>
          </div>
        </div>

        <Card className="hero-card glass-card">
          <div className="card-header">
            <span>Currency converter</span>
            <strong>Instant preview</strong>
          </div>
          <Converter
            amount={amount}
            currencyFrom={currencyFrom}
            currencyTo={currencyTo}
            onChange={handleChange}
            onSwap={handleSwap}
            onConvert={handleConvert}
            result={result}
          />
        </Card>
      </div>

      {/* Trust Badges */}
      <div className="trust-section">
        <div className="trust-grid">
          {benefits.map((item) => (
            <div key={item.label} className="trust-badge">
              <strong>{item.label}</strong>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-section">
        <div className="section-header">
          <span className="eyebrow">Why choose Rupiexo</span>
          <h3>Built for modern currency management</h3>
          <p>Industry-leading features designed with traders and businesses in mind.</p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <Card key={feature.title} className="feature-card glass-card">
              <div className="feature-icon">{feature.icon}</div>
              <strong>{feature.title}</strong>
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="how-it-works">
        <div className="section-header">
          <span className="eyebrow">Simple process</span>
          <h3>Three steps to conversion</h3>
        </div>
        <div className="steps-grid">
          <div className="step-card card">
            <div className="step-number">1</div>
            <strong>Enter amount</strong>
            <p>Input your amount and select currency pair</p>
          </div>
          <div className="step-card card">
            <div className="step-number">2</div>
            <strong>Review rate</strong>
            <p>See live rate, fees, and final amount instantly</p>
          </div>
          <div className="step-card card">
            <div className="step-number">3</div>
            <strong>Convert & Send</strong>
            <p>Confirm exchange and funds arrive in seconds</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="section-header">
          <span className="eyebrow">Trusted worldwide</span>
          <h3>What our users say</h3>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="testimonial-card glass-card">
              <div className="stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="feedback">"{testimonial.feedback}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section card glass-card">
        <div className="cta-content">
          <span className="eyebrow">Ready to get started?</span>
          <h2>Join thousands of traders and businesses</h2>
          <p>Start converting currencies today with industry-leading rates and zero hidden fees.</p>
          <div className="cta-buttons">
            <Button>Create free account</Button>
            <Button variant="secondary">Schedule demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
