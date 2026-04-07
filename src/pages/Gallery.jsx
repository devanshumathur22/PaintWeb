import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// ✅ correct imports
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img16 from "../assets/16.jpg";

export default function Gallery() {

  // ✅ correct array
  const images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img16 },
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
      </div>

      {/* SLIDER */}
      <div className="mt-16 max-w-6xl mx-auto relative z-10">

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          loop
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
                  src={item.img} // ✅ FIXED
                  className="w-full h-72 object-cover rounded-3xl transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}