import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">

      {/* 🔥 LIGHT BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200"></div>

      {/* 🔥 DARK DEPTH OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-slate-300 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-slate-500 blur-3xl opacity-20"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-900"
        >
          Crafted with Precision
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
        >
          We provide high-quality wall painting and wood polish services designed
          to transform your space with modern finishes, smooth textures, and long-lasting durability.
        </motion.p>

        {/* 🔥 DIVIDER LINE (premium touch) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ delay: 0.3 }}
          className="h-[2px] bg-slate-900 mx-auto mt-6 rounded-full"
        ></motion.div>

        {/* 🔥 EXTRA CONTENT (IMPORTANT ADD) */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-slate-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        >
          From interior walls to wood polishing, every project is handled with precision and care. 
          Our focus is not just painting — it’s about creating a clean, elegant, and premium finish 
          that enhances your home and reflects your style.
        </motion.p>

        {/* 🔥 MINI POINTS (no grid, inline clean) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-700"
        >
          <span className="px-4 py-2 bg-white/60 backdrop-blur rounded-full shadow">
            Premium Finish
          </span>
          <span className="px-4 py-2 bg-white/60 backdrop-blur rounded-full shadow">
            Smooth Work
          </span>
          <span className="px-4 py-2 bg-white/60 backdrop-blur rounded-full shadow">
            On-Time Delivery
          </span>
        </motion.div>

      </div>
    </section>
  );
}