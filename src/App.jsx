import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Compliance from './pages/Compliance.jsx';
import Contact from './pages/Contact.jsx';
import Terms from './pages/Terms.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
