import { motion } from "framer-motion";
import { Paintbrush, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200"></div>

      {/* 🔥 GLOW */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-slate-300 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-slate-400 blur-3xl opacity-20"></div>

      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-semibold text-slate-900"
        >
          Pricing Details
        </motion.h1>

        <p className="mt-4 text-slate-600 text-sm sm:text-base">
          Premium finishes with transparent pricing.
        </p>
      </div>

      {/* 🔥 MAIN SPLIT */}
      <div className="mt-20 max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10">

        {/* 🔥 WALL PAINTING */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative backdrop-blur-xl bg-white/60 border border-slate-200 
                     rounded-3xl p-6 shadow-xl"
        >
          <Paintbrush className="absolute top-5 right-5 text-slate-300 opacity-20" size={60} />

          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Wall Painting
          </h2>

          <div className="space-y-3">
            {[
              ["Royal Paint", "₹37"],
              ["Plastic Paint", "₹20"],
              ["Enamel Paint", "₹20"],
              ["Tractor Emulsion", "₹17"],
              ["Apex Paint", "₹17"],
              ["ACE Paint", "₹15"],
              ["Rustic Paint", "₹45"],
              ["Velvet Touch", "₹35"],
              ["Distemper", "₹12"],
              ["Simple Damp Proofing", "₹30"],
              ["Birla Putty", "₹8.5"],
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white/50 px-4 py-3 rounded-xl"
              >
                <span className="text-slate-700">{item[0]}</span>
                <span className="text-slate-900 font-semibold">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 🔥 WOOD POLISH */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative backdrop-blur-xl bg-slate-900 text-white 
                     rounded-3xl p-6 shadow-xl"
        >
          <Sparkles className="absolute top-5 right-5 text-white opacity-20" size={60} />

          <h2 className="text-xl font-semibold mb-6">
            Wood Polish
          </h2>

          <div className="space-y-3">
            {[
              ["P.U. Polish", "₹240"],
              ["P.U. Paint", "₹250"],
              ["Deco Paint", "₹170"],
              ["Melamine Polish", "₹140"],
              ["Simple Polish", "₹65"],
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white/10 px-4 py-3 rounded-xl"
              >
                <span>{item[0]}</span>
                <span className="font-semibold">{item[1]}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* CTA */}
      <div className="text-center mt-20 relative z-10">
        <a
          href="tel:8769158436"
          className="inline-block px-7 py-3 rounded-xl bg-slate-900 text-white 
                     hover:bg-slate-800 transition shadow-lg"
        >
          Get Exact Quote
        </a>
      </div>

    </section>
  );
}