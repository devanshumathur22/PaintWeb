import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";
import "swiper/css";

export default function Gallery() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200"></div>

      {/* 🎨 FLOAT ICON */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 left-10 text-slate-400 opacity-20"
      >
        <Paintbrush size={70} />
      </motion.div>

      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-semibold text-slate-900"
        >
          Our Work
        </motion.h1>

        <p className="mt-4 text-slate-600 text-sm sm:text-base">
          Real projects. Clean finishes. Premium transformation.
        </p>
      </div>

      {/* 🔥 SLIDER */}
      <div className="mt-16 max-w-6xl mx-auto relative z-10">

        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {[
            {
              img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
              title: "Interior Wall Finish",
            },
            {
              img: "https://images.unsplash.com/photo-1618220179428-22790b461013",
              title: "Modern Living Room",
            },
            {
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              title: "Premium Home Paint",
            },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-3xl group"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  className="w-full h-72 object-cover rounded-3xl transition duration-500 group-hover:scale-110"
                />

                {/* 🔥 OVERLAY */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

                {/* 🔥 TEXT */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-sm sm:text-base font-medium">
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      {/* CTA */}
      <div className="text-center mt-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-3xl font-semibold text-slate-900"
        >
          See the Difference
        </motion.h2>

        <p className="mt-3 text-slate-600 text-sm">
          Every project reflects our commitment to quality and detail.
        </p>
      </div>

    </section>
  );
}