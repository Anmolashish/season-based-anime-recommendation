"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function WinterMountainScene() {
  const [snowSpeed, setSnowSpeed] = useState(1);

  // Winter anime recommendations (text only)
  const winterAnime = [
    "Yuru Camp△ - Comfy winter camping",
    "Sword Art Online: Alicization - Snowy fantasy world",
    "Attack on Titan: Final Season - Winter warfare",
  ];

  // Snowflakes with different layers
  const snowflakes = Array.from({ length: 80 }).map((_, i) => (
    <div
      key={i}
      className="snowflake"
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${(Math.random() * 3 + 2) / snowSpeed}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.7 + 0.3,
        fontSize: `${Math.random() * 14 + 6}px`,
        zIndex: Math.random() > 0.7 ? 15 : 5,
        filter: `blur(${Math.random() * 2}px)`,
      }}
    >
      {["❄", "❅", "❆", "✦"][Math.floor(Math.random() * 4)]}
    </div>
  ));

  return (
    <div className="relative h-[60vh] bg-gradient-to-b from-[#0a1a30] via-[#0a3d6b] to-[#0a5fac] overflow-hidden">
      {/* Snow Controls */}
      <div className="absolute top-4 right-4 z-30 bg-white/90 p-3 rounded-lg shadow-xl backdrop-blur-sm border border-gray-200">
        <p className="text-sm mb-2 text-gray-800 font-bold">Snow Controls:</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSnowSpeed(0.5)}
            className="px-3 py-1 text-sm bg-blue-100 rounded-lg hover:bg-blue-200 transition flex items-center gap-2"
          >
            <span>❄</span> Slow
          </button>
          <button
            onClick={() => setSnowSpeed(1)}
            className="px-3 py-1 text-sm bg-blue-200 rounded-lg hover:bg-blue-300 transition flex items-center gap-2"
          >
            <span>❄❄</span> Normal
          </button>
          <button
            onClick={() => setSnowSpeed(2)}
            className="px-3 py-1 text-sm bg-blue-300 rounded-lg hover:bg-blue-400 transition flex items-center gap-2"
          >
            <span>❄❄❄</span> Fast
          </button>
        </div>
      </div>

      {/* Snow animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes}
      </div>

      {/* Mountain Background - Touching base */}
      <div className="absolute bottom-0 w-full h-[100%] mt-[10px] z-10">
        <Image
          src="/Images/pngwing.com.png"
          alt="Snowy mountains"
          fill
          className="object-cover object-bottom"
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
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
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
