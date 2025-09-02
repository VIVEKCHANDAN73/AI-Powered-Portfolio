"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  { title: "AI Chatbot", desc: "Built with FastAPI + React", image: "/Announcement--5-.svg", link: "/project1" },
  { title: "Portfolio Website", desc: "Next.js + Tailwind", image: "/project2.png", link: "/" },
  { title: "Data Pipeline", desc: "Prefect + AWS", image: "/project3.jpg", link: "/project3" },
];

export default function ProjectCarousel() {
  const swiperRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const toggleAutoplay = () => {
    if (swiperRef.current?.autoplay) {
      if (isPaused) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
      setIsPaused(!isPaused);
    }
  };

  // ensure pagination attaches correctly
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, [swiperRef.current]);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ el: ".custom-pagination", clickable: true }}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full"
      >
        {projects.map((p, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-center w-full py-10">
              <div className="w-full max-w-3xl p-10 rounded-2xl shadow-lg bg-gray-800/70">
                <img
                  src={p.image}
                  alt="Project"
                  className="w-full h-48 object-cover rounded-t-2xl group-hover:opacity-90 transition"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{p.desc}</p>
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={p.link}
                      className="px-3 py-1 text-sm text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-700 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="px-3 py-1 text-sm text-indigo-400 border border-indigo-400 rounded-full hover:bg-indigo-400 hover:text-black transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination + Play/Pause Button together */}
      <div className="flex items-center gap-3 mt-4">
        <div className="custom-pagination flex gap-2" />
        <button
          onClick={toggleAutoplay}
          className="px-3 py-1 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
        >
          {isPaused ? "▶" : "⏸"}
        </button>
      </div>
    </div>
  );
}
