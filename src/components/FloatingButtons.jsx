import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-4">

      {/* CALL BUTTON */}
      <motion.a
        href="tel:8769158436"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                   rounded-full bg-slate-900 text-white shadow-lg hover:shadow-2xl transition"
      >
        {/* 🔥 PULSE RING */}
        <span className="absolute inset-0 rounded-full border border-white/20 animate-ping"></span>

        <Phone size={18} className="relative z-10" />
      </motion.a>

      {/* WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/919680183292"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                   rounded-full bg-green-500 text-white shadow-lg hover:shadow-2xl transition"
      >
        {/* 🔥 GLOW EFFECT */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-md"></span>

        <MessageCircle size={18} className="relative z-10" />
      </motion.a>

    </div>
  );
}