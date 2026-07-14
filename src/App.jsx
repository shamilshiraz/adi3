import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import InvestorPopup from "./components/InvestorPopup";
import Footer from "./components/Footer";
import Agents from "./components/Agents";
import RoadshowsPage from "./components/RoadshowPage";
import Consultations from "./pages/Consultations";
import ContactPage from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust duration here

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <div>
          <ScrollToTop/>
          <InvestorPopup />
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/roadshows" element={<RoadshowsPage />} />
            <Route path="/developer" element={<Consultations />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;