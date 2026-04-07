import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">

      <div className="flex flex-col items-center gap-6">

        {/* 🎨 BRUSH ANIMATION */}
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="p-5 rounded-full bg-slate-900 text-white shadow-xl"
        >
          <Paintbrush size={32} />
        </motion.div>

        {/* 🔥 PAINT LINE */}
        <div className="w-40 h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-20 h-full bg-slate-900 rounded-full"
          />
        </div>

        {/* TEXT */}
        <p className="text-sm text-slate-600">
          Painting your experience...
        </p>

      </div>

    </div>
  );
}