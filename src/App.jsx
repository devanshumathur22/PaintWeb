import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons"; // ✅ correct

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./components/Pricing"; // ✅ correct
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
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