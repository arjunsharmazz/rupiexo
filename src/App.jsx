import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Exchange from './pages/Exchange.jsx';
import Rates from './pages/Rates.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Auth from './pages/Auth.jsx';
import History from './pages/History.jsx';
import Admin from './pages/Admin.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/history" element={<History />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
