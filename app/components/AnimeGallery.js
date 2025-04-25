"use client";
import { useState, useEffect } from "react";

export default function AnimeGallery({ anime, season }) {
  const filteredAnime = anime
    .filter((item) => item.season === season)
    .slice(0, 9);

  return (
    <div className="w-full min-h-screen p-2">
      <div className={`grid w-full h-screen z-30  grid-cols-3 gap-3 `}>
        {filteredAnime.map((anime, index) => (
          <div
            key={index}
            className="h-full z-30 relative  rounded-lg overflow-hidden"
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
