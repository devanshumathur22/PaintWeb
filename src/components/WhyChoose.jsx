import { motion } from "framer-motion";
import { CheckCircle, Paintbrush } from "lucide-react";

export default function WhyChoose() {

  const text = "Why Choose Us";

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">

      {/* 🔥 LIGHT BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200"></div>

      {/* 🔥 SOFT GLOW */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-slate-200 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-slate-300 blur-3xl opacity-30"></div>

      {/* 🎨 FLOATING ICON (SUBTLE) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 right-10 text-slate-400 opacity-20"
      >
        <Paintbrush size={60} />
      </motion.div>

      {/* 🔥 HEADING */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-900 flex justify-center flex-wrap">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>

        <p className="mt-4 text-slate-600 text-sm sm:text-base">
          Quality you can trust. Results you can see.
        </p>
      </div>

      {/* 🔥 FEATURES (NO GRID, CLEAN LIST) */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 flex flex-col gap-5">

        {[
          "Experienced Team",
          "Affordable Pricing",
          "On-Time Completion",
          "Premium Finish",
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-white/60 backdrop-blur 
                       border border-slate-200 rounded-xl px-5 py-4 
                       shadow hover:shadow-md transition"
          >
            <CheckCircle className="text-slate-900" size={20} />

            <span className="text-slate-800 text-sm sm:text-base font-medium">
              {item}
            </span>
          </motion.div>
        ))}

      </div>

    </section>
  );
}