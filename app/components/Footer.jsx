"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { AnimeDataContext } from "../data/Data";

export default function Footer({ season }) {
  const [snowSpeed, setSnowSpeed] = useState(1);
  const { theme, footer } = useContext(AnimeDataContext);

  const winterAnime = [
    "Yuru Camp△ - Comfy winter camping",
    "Sword Art Online: Alicization - Snowy fantasy world",
    "Attack on Titan: Final Season - Winter warfare",
  ];

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Mountain Background - Touching base */}
      <div className="absolute bottom-0 w-full h-[100%] mt-[10px] z-10">
        <Image
          src="/Images/image-from-rawpixel-id-6757519-png.png"
          alt="Snowy mountains"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Anime Recommendations as Simple Text */}
      <div className="absolute bottom-24 left-4 z-20 bg-white/80 p-3 rounded-lg backdrop-blur-sm max-w-xs">
        <h3 className="font-bold text-gray-800 mb-2">
          Winter Anime Recommendations:
        </h3>
        <ul className="text-sm text-gray-700 space-y-1">
          {winterAnime.map((anime, index) => (
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
