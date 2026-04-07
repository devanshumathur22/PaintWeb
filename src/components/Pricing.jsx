import { motion } from "framer-motion";
import { Paintbrush, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [showAll, setShowAll] = useState(false);

  const wallPainting = [
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
  ];

  const visibleItems = showAll ? wallPainting : wallPainting.slice(0, 5);

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200"></div>

      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-5xl font-semibold text-slate-900">
          Pricing Details
        </h1>
      </div>

      {/* MAIN */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* WALL PAINTING */}
        <motion.div className="relative backdrop-blur-xl bg-white/60 border border-slate-200 rounded-3xl p-6 shadow-xl">

          <Paintbrush className="absolute top-5 right-5 text-slate-300 opacity-20" size={60} />

          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Wall Painting
          </h2>

          <div className="space-y-3">
            {visibleItems.map((item, i) => (
              <div key={i} className="flex justify-between bg-white/50 px-4 py-3 rounded-xl">
                <span>{item[0]}</span>
                <span className="font-semibold">{item[1]}</span>
              </div>
            ))}
          </div>

          {/* 🔥 READ MORE BUTTON */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-sm text-slate-900 font-medium hover:underline"
          >
            {showAll ? "Show Less ↑" : "Read More ↓"}
          </button>

        </motion.div>

        {/* WOOD POLISH */}
        <motion.div className="relative backdrop-blur-xl bg-slate-900 text-white rounded-3xl p-6 shadow-xl">

          <Sparkles className="absolute top-5 right-5 opacity-20" size={60} />

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
              <div key={i} className="flex justify-between bg-white/10 px-4 py-3 rounded-xl">
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
          className="px-7 py-3 rounded-xl bg-slate-900 text-white shadow-lg"
        >
          Get Exact Quote
        </a>
      </div>

    </section>
  );
}