import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 relative">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900">
          What Clients Say
        </h2>

        <p className="mt-4 text-slate-600 text-sm">
          Real feedback from our happy customers.
        </p>

        <div className="mt-16 flex flex-col sm:flex-row gap-6">

          {[
            {
              name: "Rahul Sharma",
              text: "Kaam bahut smooth hua, finishing ekdum perfect thi.",
            },
            {
              name: "Amit Verma",
              text: "Time pe complete kiya aur quality top notch thi.",
            },
            {
              name: "Neha Gupta",
              text: "Wood polish ka finish bilkul premium lag raha hai.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur border border-slate-200 
                         rounded-2xl p-6 shadow-lg"
            >
              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-4 text-slate-700 text-sm">
                "{item.text}"
              </p>

              <h4 className="mt-4 font-medium text-slate-900">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}