import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';

export default function About() {
  return (
    <section className="page about-page">
      <div className="page-grid grid-2">
        <div className="about-copy">
          <span className="eyebrow">Built for modern finance</span>
          <h2>About rupiexoExchange</h2>
          <p>
            rupiexoExchange combines responsive design, clean data presentation, and secure flows to deliver a premium currency experience.
            Everything is designed to feel effortless, intelligent, and built for everyday business.
          </p>
          <div className="feature-list">
            <div>
              <strong>Fast quotes</strong>
              <span>Minimal latency pricing.</span>
            </div>
            <div>
              <strong>Simple controls</strong>
              <span>One-click exchange workflows.</span>
            </div>
            <div>
              <strong>Transparent fees</strong>
              <span>Clear outcomes for every conversion.</span>
            </div>
          </div>
        </div>

        <Card className="contact-card glass-card">
          <div className="card-header">
            <span>Contact team</span>
            <strong>Get in touch</strong>
          </div>
          <form className="contact-form">
            <Input label="Name" name="name" />
            <Input label="Email" type="email" name="email" />
            <Input label="Message" name="message" />
            <Button>Send message</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
