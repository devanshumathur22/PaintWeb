import { motion } from "framer-motion";
import { Paintbrush, Sparkles, Droplet, PaintRoller } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200"></div>

      {/* FLOAT ICON */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 right-10 text-slate-400 opacity-20"
      >
        <PaintRoller size={70} />
      </motion.div>

      {/* HEADING */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-semibold text-slate-900">
          Our Services
        </h1>

        <p className="mt-4 text-slate-600 text-sm sm:text-base">
          From fresh wall painting to premium wood polish, we deliver clean,
          long-lasting finishes that transform your space into something truly
          beautiful.
        </p>
      </div>

      {/* SERVICES */}
      <div className="relative z-10 max-w-5xl mx-auto mt-20 flex flex-col gap-10">

        {/* WALL PAINTING */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-start gap-6 backdrop-blur-xl bg-white/60 border border-slate-200 
                     rounded-3xl p-6 shadow-xl"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.2 }}
            className="p-3 rounded-full bg-slate-900 text-white shadow-lg"
          >
            <Paintbrush size={28} />
          </motion.div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Wall Painting
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              We provide smooth and professional wall painting using premium
              materials like royal paint, plastic paint, and distemper. Our work
              ensures clean edges, even finishing, and long-lasting results.
            </p>

            {/* 🔥 EXTRA POINTS */}
            <ul className="mt-3 text-sm text-slate-700 space-y-1">
              <li>• Interior & exterior painting</li>
              <li>• Crack filling & surface preparation</li>
              <li>• Modern color combinations</li>
            </ul>
          </div>
        </motion.div>

        {/* WOOD POLISH */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-start gap-6 backdrop-blur-xl bg-slate-900 text-white 
                     rounded-3xl p-6 shadow-xl ml-auto max-w-xl"
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.2 }}
            className="p-3 rounded-full bg-white text-slate-900 shadow-lg"
          >
            <Sparkles size={28} />
          </motion.div>

          <div>
            <h3 className="text-lg font-semibold">
              Wood Polish
            </h3>

            <p className="text-slate-300 text-sm mt-2">
              Enhance your furniture and doors with premium wood polish. We use
              PU, melamine, and deco finishes to give a smooth, glossy, and
              durable surface.
            </p>

            <ul className="mt-3 text-sm text-slate-300 space-y-1">
              <li>• PU & melamine polish</li>
              <li>• Scratch-resistant finishing</li>
              <li>• Long-lasting shine</li>
            </ul>
          </div>
        </motion.div>

        {/* DAMP PROOF */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-start gap-6 backdrop-blur-xl bg-white/60 border border-slate-200 
                     rounded-3xl p-6 shadow-xl"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-3 rounded-full bg-slate-900 text-white shadow-lg"
          >
            <Droplet size={28} />
          </motion.div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Damp Proofing
            </h3>

            <p className="text-slate-600 text-sm mt-2">
              Protect your walls from moisture, leakage, and damage with our
              professional damp-proof solutions. We ensure strong protection and
              longer wall life.
            </p>

            <ul className="mt-3 text-sm text-slate-700 space-y-1">
              <li>• Waterproof coating</li>
              <li>• Anti-leak treatment</li>
              <li>• Long-term protection</li>
            </ul>
          </div>
        </motion.div>

      </div>

    </section>
  );
}