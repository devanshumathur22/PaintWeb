import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { image } from "framer-motion/client";

export default function Gallery() {

  const images = [
    {img: "/src/assets/1.jpg" },
    {img: "/src/assets/2.jpg" },
    {img: "/src/assets/3.jpg" },
    {img: "/src/assets/4.jpg" },
    {img: "/src/assets/5.jpg" },
    {img: "/src/assets/6.jpg" },
    {img: "/src/assets/7.jpg" },
    {img: "/src/assets/8.jpg" },
    {img: "/src/assets/9.jpg" },
    {img: "/src/assets/10.jpg" },
    {img: "/src/assets/11.jpg" },
    {img: "/src/assets/12.jpg" },
    {img: "/src/assets/13.jpg" },
    {img: "/src/assets/14.jpg" },
   
    {img: "/src/assets/16.jpg" },

    
  ];

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200"></div>

      {/* FLOAT ICON */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 left-10 text-slate-400 opacity-20"
      >
        <Paintbrush size={70} />
      </motion.div>

      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-5xl font-semibold text-slate-900">
          Our Work
        </h1>

        <p className="mt-4 text-slate-600 text-sm">
          Real projects. Clean finishes. Premium transformation.
        </p>
      </div>

      {/* SLIDER */}
      <div className="mt-16 max-w-6xl mx-auto relative z-10">

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-3xl group"
              >
                <img
                  src={item.img}
                  className="w-full h-72 object-cover rounded-3xl transition duration-500 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

                {/* text */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-sm font-medium">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}