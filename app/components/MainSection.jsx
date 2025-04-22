"use client";
import React, { useContext, useState } from "react";
import { AnimeDataContext } from "../data/Data";
import HomePage1 from "./HomePage1";
import Footer from "./Footer";

export default function MainSection(props) {
  const { theme } = useContext(AnimeDataContext);
  const currentBg = theme[props.season].background;
  const [snowSpeed, setSnowSpeed] = useState(1); // Added missing state

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
    <div className={`w-full h-fit bg-gradient-to-b ${currentBg} relative`}>
      {" "}
      {/* Added relative */}
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
      {/* Snow Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes}
      </div>
      {/* Main Content */}
      <HomePage1 season={props.season} />
      <Footer season={props.season} />
      {/* CSS for Snowflakes */}
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
