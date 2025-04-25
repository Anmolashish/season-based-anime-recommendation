"use client";
import { useState, useEffect } from "react";

export default function AnimeGallery({ anime, season }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const filteredAnime = anime
    .filter((item) => item.season === season)
    .slice(0, 9);

  return (
    <div className="w-full min-h-screen p-2">
      <div
        className={`grid  h-screen z-30  ${
          isMobile ? "grid-cols-3" : "grid-cols-3 md:grid-cols-3 lg:grid-cols-3"
        } gap-3 md:gap-3`}
      >
        {filteredAnime.map((anime, index) => (
          <div
            key={index}
            className="h-full z-30 relative  rounded overflow-hidden"
          >
            <img
              src={anime.image}
              alt=""
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
