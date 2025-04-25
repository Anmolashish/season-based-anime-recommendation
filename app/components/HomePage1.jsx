"use client";
import { useState, useEffect, useRef } from "react";

export default function AnimeGallery({ anime, activeSeason, season }) {
  const containerRef = useRef(null);
  const animationId = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Filter and organize anime data
  const filteredAnime = anime.filter((item) => item.season === season);
  const uniqueAnime = [
    ...new Map(filteredAnime.map((item) => [item.title, item])).values(),
  ];

  // Responsive setup
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Animation logic
  const animate = () => {
    if (!containerRef.current) return;

    containerRef.current.scrollLeft += 0.5;

    // Seamless looping
    if (
      containerRef.current.scrollLeft >=
      containerRef.current.scrollWidth / 2 - containerRef.current.clientWidth
    ) {
      containerRef.current.scrollLeft = 0;
    }

    animationId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId.current);
  }, [filteredAnime, isMobile]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-gray-900">
      {/* Season title */}
      <div className="absolute top-6 left-6 z-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white capitalize tracking-wider">
          {season}
        </h2>
        <div className="h-1 w-16 bg-white mt-2"></div>
      </div>

      {/* Anime carousel */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center overflow-hidden"
      >
        <div className="flex space-x-6 px-4">
          {[...uniqueAnime, ...uniqueAnime].map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="relative flex-shrink-0 group transition-all duration-300"
              style={{
                width: isMobile ? "70vw" : "24vw",
                height: isMobile ? "40vw" : "14vw",
                minWidth: isMobile ? "70vw" : "24vw",
              }}
            >
              {/* Image with gradient overlay */}
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Anime title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Season indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {["winter", "spring", "summer", "autumn"].map((s) => (
          <button
            key={s}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              season === s ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          ></button>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-gray-900/80 pointer-events-none"></div>
    </div>
  );
}
