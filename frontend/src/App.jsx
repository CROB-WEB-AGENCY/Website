import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Startlogo from "./components/Startlogo";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortofolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [showSplash, setShowSplash] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      setShowHeader(true);
    }, 3000);
  }, []);

  return (
    <Router>
      <AnimatePresence>{showSplash && <Startlogo />}</AnimatePresence>
      <AnimatePresence>
        {showHeader && (
          <Routes>
            <Route path="/" element={<Homepage isOpen={isOpen} toggleSidebar={toggleSidebar} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/contactus" element={<ContactPage />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
