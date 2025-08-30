import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import ChinaPage from './pages/ChinaPage';
import SloveniaPage from './pages/SloveniaPage';
import DenmarkPage from './pages/DenmarkPage';
import HungaryPage from './pages/HungaryPage';
import JapanPage from './pages/JapanPage';
import MaltaPage from './pages/MaltaPage';
import UKPage from './pages/UKPage';
import SwedenPage from './pages/SwedenPage';
import FinlandPage from './pages/FinlandPage';
import NetherlandsPage from './pages/NetherlandsPage';
import FrancePage from './pages/FrancePage';
import AustraliaPage from './pages/AustraliaPage';
import CanadaPage from './pages/CanadaPage';
 
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/study-visa" element={<StudyVisaPage />} />
          <Route path="/work-visa" element={<WorkVisaPage />} />
          <Route path="/tourist-visa" element={<TouristVisaPage />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="/china" element={<ChinaPage />} />
          <Route path="/slovenia" element={<SloveniaPage />} />
          <Route path="/denmark" element={<DenmarkPage />} />
          <Route path="/hungary" element={<HungaryPage />} />
          <Route path="/japan" element={<JapanPage />} />
          <Route path="/malta" element={<MaltaPage />} />
          <Route path="/uk" element={<UKPage />} />
          <Route path="/sweden" element={<SwedenPage />} />
          <Route path="/finland" element={<FinlandPage />} />
          <Route path="/netherlands" element={<NetherlandsPage />} />
          <Route path="/france" element={<FrancePage />} />
          <Route path="/australia" element={<AustraliaPage />} />
          <Route path="/canada" element={<CanadaPage />} />
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