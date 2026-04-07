import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">

      {/* 🔥 DARK GRADIENT BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>

      {/* 🔥 DEPTH OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      {/* 🔥 GLOW BLOBS */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-slate-700 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-slate-600 blur-3xl opacity-30"></div>

      {/* 🎨 FLOATING ICON */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 right-10 text-slate-500 opacity-20"
      >
        <Paintbrush size={70} />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Ready to Transform Your Home?
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-300 text-sm sm:text-base"
        >
          Get a free consultation and experience premium painting services.
        </motion.p>

        {/* 🔥 BUTTON (UPGRADED) */}
        <motion.a
          href="tel:8769158436"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block mt-8 px-7 py-3 rounded-xl 
                     bg-white text-slate-900 font-medium 
                     shadow-lg hover:shadow-2xl transition"
        >
          {/* 🔥 BUTTON GLOW */}
          <span className="absolute inset-0 rounded-xl bg-white opacity-20 blur-md"></span>

          <span className="relative z-10">Get Free Quote</span>
        </motion.a>

      </div>
    </section>
  );
}