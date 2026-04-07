import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons"; // ✅ correct

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./components/Pricing"; // ✅ correct
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // 1.5 sec
  }, []);

  if (loading) return <Loader />;
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* 🔥 FLOATING CTA (GLOBAL) */}
      <FloatingButtons />

      <Footer />
    </Router>
  );
}