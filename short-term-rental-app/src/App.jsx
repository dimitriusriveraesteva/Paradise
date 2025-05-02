import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyDetails from './pages/PropertyDetails';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property" element={<PropertyDetails />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
