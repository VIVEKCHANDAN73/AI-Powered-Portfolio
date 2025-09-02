"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  { title: "AI Chatbot", desc: "Built with FastAPI + React", image: "/project1.png" },
  { title: "Portfolio Website", desc: "Next.js + Tailwind", image: "/project2.jpg"},
  { title: "Data Pipeline", desc: "Prefect + AWS", image: "/project3.jpg" },
];

export default function ProjectCarousel() {
  return (
    <div className="flex flex-center">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {projects.map((p, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-center min-h-screen w-full">
              <div className="w-full max-w-3xl p-10 rounded-2xl-w shadow-lg">
                <img
                  src={p.image}
                  alt="Project"
                  className="w-full h-48 object-cover rounded-t-2xl group-hover:opacity-90 transition"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {p.desc}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href="#"
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
    </div>
  );
}
