import { Phone, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const area = form.area.value;
    const details = form.details.value;

    const message = `Hello, I want painting service:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Area: ${area}%0A
Details: ${details}`;

    window.open(`https://wa.me/919680183292?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* 🔥 BG MIX */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"></div>

      {/* 🎨 FLOAT ICON */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 right-10 text-slate-400 opacity-20"
      >
        <MessageCircle size={70} />
      </motion.div>

      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-semibold text-slate-900"
        >
          Get in Touch
        </motion.h1>

        <p className="mt-4 text-slate-600 text-sm sm:text-base">
          Tell us about your project and get a quick quote.
        </p>
      </div>

      {/* 🔥 MAIN SPLIT */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* 🔥 LEFT SIDE (INFO PANEL) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Contact Information
            </h2>

            <p className="text-slate-300 text-sm">
              Reach out to us directly for quick response and professional service.
            </p>

            <div className="mt-6 space-y-4">

              <a href="tel:8769158436" className="flex items-center gap-3">
                <Phone size={18} />
                <span>8769158436</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Rajasthan, India</span>
              </div>
              

            </div>
          </div>

          {/* 🔥 SMALL CTA */}
          <a
            href="tel:8769158436"
            className="mt-10 inline-block px-5 py-2 rounded-lg bg-white text-slate-900 text-sm font-medium text-center"
          >
            Call Now
          </a>
        </motion.div>

        {/* 🔥 RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="backdrop-blur-xl bg-white/70 border border-slate-200 
                     rounded-3xl p-6 sm:p-8 shadow-xl"
        >

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 text-center">
            Request a Quote
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-slate-300 outline-none"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-slate-300 outline-none"
            />

            <input
              name="area"
              type="text"
              placeholder="Area (sq.ft)"
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-slate-300 outline-none"
            />

            <textarea
              name="details"
              placeholder="Project Details"
              rows="4"
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-slate-300 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-slate-900 text-white 
                         hover:bg-slate-800 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get Quote on WhatsApp
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}