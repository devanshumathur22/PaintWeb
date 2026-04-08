import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="h-[85vh] sm:h-[90vh] md:h-screen flex items-center justify-center text-center px-4 sm:px-6 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 
                   rounded-2xl px-6 sm:px-10 py-8 sm:py-10 max-w-xl w-full"
      >

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white"
        >
          Premium Painting Experience
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed"
        >
          Transform your home with smooth finishes, modern colors, and expert craftsmanship.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 mt-6 justify-center"
        >
          {/* CALL */}
          <a
            href="tel:8769158436"
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium 
                       bg-white text-slate-900 
                       hover:bg-slate-100 transition 
                       shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
          >
            Get Free Quote
          </a>

          {/* 🔥 FIXED ROUTING */}
          <Link
            to="/services"
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-white 
                       hover:bg-white hover:text-slate-900 
                       transition text-sm sm:text-base"
          >
            View Services
          </Link>
        </motion.div>

      </motion.div>

      {/* 🔥 SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 flex flex-col items-center text-white text-xs"
      >
        <span className="mb-1">Scroll</span>

        <div className="w-5 h-8 border border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-white rounded-full mt-1"
          />
        </div>
      </motion.div>

    </section>
  );
}