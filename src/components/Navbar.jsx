import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 w-full z-50 flex justify-center px-3">
      
      {/* CONTAINER */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%] 
                      backdrop-blur-xl bg-white/60 
                      border border-slate-200 
                      rounded-2xl shadow-sm">

        {/* TOP BAR */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-3">

          {/* LOGO */}
          <h1 className="text-slate-900 font-medium text-sm sm:text-base tracking-tight">
            Suresh Painter
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <a href="tel:8769158436" className="cta-btn text-sm">
              Get Quote
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-900"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-slate-200 px-4 py-4 flex flex-col gap-3 text-center text-sm">
            
            <Link onClick={() => setOpen(false)} to="/" className="nav-link">
              Home
            </Link>

            <Link onClick={() => setOpen(false)} to="/services" className="nav-link">
              Services
            </Link>

            <Link onClick={() => setOpen(false)} to="/gallery" className="nav-link">
              Gallery
            </Link>

            <Link onClick={() => setOpen(false)} to="/contact" className="nav-link">
              Contact
            </Link>

            {/* CTA MOBILE */}
            <a
              href="tel:8769158436"
              className="cta-btn mt-2"
            >
              Get Free Quote
            </a>

          </div>
        )}
      </div>
    </div>
  );
}