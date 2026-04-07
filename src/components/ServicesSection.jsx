import { motion } from "framer-motion";
import { Paintbrush, Sparkles, Droplet, Brush, PaintRoller } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">

      {/* 🔥 DARK + LIGHT MIX BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      {/* 🔥 FLOATING ICONS (PAINTER VIBE) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 left-10 text-slate-600 opacity-20"
      >
        <Brush size={60} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-10 right-10 text-slate-600 opacity-20"
      >
        <PaintRoller size={60} />
      </motion.div>

      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-1/2 left-0 text-slate-600 opacity-10"
      >
        <Paintbrush size={80} />
      </motion.div>

      {/* 🔥 HEADING */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white"
        >
          Our Services
        </motion.h2>

        <p className="mt-4 text-slate-300 text-sm sm:text-base">
          Premium craftsmanship with modern finishing.
        </p>
      </div>

      {/* 🔥 CREATIVE FLOW (NO GRID) */}
      <div className="relative z-10 max-w-5xl mx-auto mt-16 flex flex-col gap-8">

        {/* CARD 1 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 backdrop-blur-xl bg-white/10 border border-white/20 
                     rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
        >
          <Paintbrush className="text-white" size={30} />
          <div>
            <h3 className="font-semibold text-lg text-white">Wall Painting</h3>
            <p className="text-slate-300 text-sm mt-1">
              Royal & plastic paints with smooth finish.
            </p>
          </div>
        </motion.div>

        {/* CARD 2 (OFFSET RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 backdrop-blur-xl bg-white/10 border border-white/20 
                     rounded-2xl p-6 shadow-lg hover:shadow-2xl transition ml-auto max-w-xl"
        >
          <Sparkles className="text-white" size={30} />
          <div>
            <h3 className="font-semibold text-lg text-white">Wood Polish</h3>
            <p className="text-slate-300 text-sm mt-1">
              PU & melamine polish for premium shine.
            </p>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 backdrop-blur-xl bg-white/10 border border-white/20 
                     rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
        >
          <Droplet className="text-white" size={30} />
          <div>
            <h3 className="font-semibold text-lg text-white">Damp Proof</h3>
            <p className="text-slate-300 text-sm mt-1">
              Protect walls from moisture & damage.
            </p>
          </div>
        </motion.div>

      </div>

      {/* CTA */}
      <div className="text-center mt-16 relative z-10">
        <motion.a
          href="/services"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 rounded-xl bg-white text-slate-900 
                     hover:bg-slate-200 transition shadow-lg hover:shadow-xl"
        >
          View All Services
        </motion.a>
      </div>

    </section>
  );
}