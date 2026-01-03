import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import ForColleges from './pages/ForColleges';
import Features from './pages/Features';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/about" element={<About />} />
      <Route path="/colleges" element={<ForColleges />} />
      <Route path="/features" element={<Features />} />      
      
    </Routes>
  );
}

export default App;