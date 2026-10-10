import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import InvestorPopup from "./components/InvestorPopup";
import Footer from "./components/Footer";
import Agents from "./components/Agents";
import RoadshowsPage from "./components/RoadshowPage";
import Consultations from "./pages/Consultations";
import ContactPage from "./pages/Contact";
import TermsPage from "./pages/Terms";
import AboutPage from "./pages/About";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

const pageMeta = {
  "/": {
    title: "ADHIHAVEN | Dubai Real Estate",
    description:
      "ADHIHAVEN helps investors approach Dubai property with clearer advice, carefully considered opportunities, and personal guidance.",
  },
  "/agents": {
    title: "Our Advisors | ADHIHAVEN",
    description:
      "Meet the ADHIHAVEN advisory team and start a clearer conversation about Dubai property.",
  },
  "/about": {
    title: "About Abdul Abid | ADHIHAVEN",
    description:
      "Meet Abdul Abid, CEO and Founder of ADHIHAVEN, and learn about the experience behind the company’s approach to Dubai property.",
  },
  "/roadshows": {
    title: "Investor Roadshows | ADHIHAVEN",
    description:
      "Meet ADHIHAVEN at private Dubai property briefings, showcases, and investor conversations.",
  },
  "/developer": {
    title: "Investment Consultation | ADHIHAVEN",
    description:
      "Start a focused conversation about your Dubai property goals with ADHIHAVEN.",
  },
  "/contact": {
    title: "Contact ADHIHAVEN | Dubai Real Estate",
    description:
      "Tell ADHIHAVEN what you are considering and get a clearer next step for your Dubai property journey.",
  },
  "/terms": {
    title: "Terms & Conditions | ADHIHAVEN",
    description:
      "Read the terms and conditions for using the ADHIHAVEN website and consultation services.",
  },
};

function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] || {
      title: "ADHIHAVEN | Dubai Real Estate",
      description: "A clearer way to approach Dubai property with ADHIHAVEN.",
    };

    document.title = meta.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = meta.description;
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust duration here

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

     {!loading && (
  <div className="min-h-screen w-full overflow-x-clip">
           <ScrollToTop/>
           <RouteMeta />
           <InvestorPopup />
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/roadshows" element={<RoadshowsPage />} />
            <Route path="/developer" element={<Consultations />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
