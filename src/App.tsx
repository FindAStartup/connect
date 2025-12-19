import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/howitworks" element={<HowItWorks />} />
    </Routes>
  );
}

export default App;