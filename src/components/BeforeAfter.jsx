import { motion } from "framer-motion";

export default function BeforeAfter() {
  return (
    <section className="py-24 px-4 sm:px-6 relative">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-5xl font-semibold">
          Before & After
        </h2>

        <p className="mt-4 text-slate-300 text-sm">
          See the real transformation.
        </p>

        {/* IMAGES */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">

          {/* BEFORE */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              className="rounded-2xl"
            />
            <p className="mt-2 text-sm text-slate-300">Before</p>
          </motion.div>

          {/* AFTER */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              className="rounded-2xl"
            />
            <p className="mt-2 text-sm text-slate-300">After</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}