import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StudyVisaPage from './pages/StudyVisaPage';
import WorkVisaPage from './pages/WorkVisaPage';
import TouristVisaPage from './pages/TouristVisaPage';
import CountryPage from './pages/CountryPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/study-visa" element={<StudyVisaPage />} />
          <Route path="/work-visa" element={<WorkVisaPage />} />
          <Route path="/tourist-visa" element={<TouristVisaPage />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;