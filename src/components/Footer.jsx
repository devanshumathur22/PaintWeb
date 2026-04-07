import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">

      {/* 🔥 DARK BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* 🔥 GLOW */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-slate-700 blur-3xl opacity-30"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 py-12 text-slate-300">

        {/* 🔥 MAIN */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10">

          {/* 🏠 BRAND */}
          <div className="text-center sm:text-left">
            <h2 className="text-white text-xl font-semibold">
              Suresh Painter
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Premium painting & polishing services with modern finish.
            </p>
          </div>

          {/* 🔗 LINKS */}
          <div className="flex flex-col sm:flex-row justify-between gap-8 text-sm">

            {/* NAV */}
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/services" className="hover:text-white transition">Services</Link>
              <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
              <Link to="/pricing" className="hover:text-white transition">Pricing</Link>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-3 text-center sm:text-left">

              <a href="tel:8769158436" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white">
                <Phone size={16} /> 8769158436
              </a>

              <a href="mailto:info@gmail.com" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white">
                <Mail size={16} /> info@gmail.com
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin size={16} /> Your City, India
              </div>

            </div>

          </div>

          {/* 🔥 DIVIDER */}
          <div className="h-px bg-slate-700"></div>

          {/* 🔥 BOTTOM */}
          <div className="text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Suresh Painter. All rights reserved.
          </div>

        </div>
      </div>

    </footer>
  );
}