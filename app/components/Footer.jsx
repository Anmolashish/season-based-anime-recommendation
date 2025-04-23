"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { AnimeDataContext } from "../data/Data";

export default function Footer({ season }) {
  const { seasonalAnime, theme, seasonalTheme } = useContext(AnimeDataContext);

  // Get anime recommendations for current season
  const currentSeasonAnime = seasonalAnime[season] || seasonalAnime.winter;
  const currentTheme = seasonalTheme[season] || seasonalTheme.winter;

  return (
    <div className={`relative h-[60vh] overflow-hidden `}>
      {/* Mountain Background - Touching base */}
      <div className="absolute bottom-0 w-full h-[100%] mt-[10px] z-10">
        <Image
          src={currentTheme.image} // Changed to use seasonal image
          alt={`${season} landscape`}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Seasonal Anime Recommendations */}
      <div className="absolute bottom-24 left-4 z-20 bg-white/80 p-3 rounded-lg backdrop-blur-sm max-w-xs">
        <h4 className="font-bold text-xl text-gray-800 mb-2">
          {season.charAt(0).toUpperCase() + season.slice(1)} Anime
          Recommendations:
        </h4>
        <ul className="text-sm text-gray-700 space-y-1">
          {currentSeasonAnime.slice(0, 3).map((anime, index) => (
            <li key={index}>• {anime}</li>
          ))}
        </ul>
      </div>

      {/* CSS */}
      <style jsx global>{`
        .snowflake {
          position: absolute;
          color: white;
          user-select: none;
          pointer-events: none;
          animation-name: snowfall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
}
