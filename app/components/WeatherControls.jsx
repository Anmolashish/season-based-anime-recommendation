"use client";
import React, { useState } from "react";

const WeatherControls = ({ season, theme, setWeatherIntensity }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleControls = () => {
    setIsExpanded(!isExpanded);
  };

  const getSeasonIcon = () => {
    switch (season) {
      case "winter":
        return "❄";
      case "rainy":
        return "🌧️";
      case "autumn":
        return "🍁";
      default:
        return "🌡️";
    }
  };

  return (
    <div className="fixed top-4 right-4 z-30">
      {/* Collapsed State (Icon Only) */}
      <button
        onClick={toggleControls}
        className={` fixed top-4 right-4 p-2 rounded-full shadow-xl backdrop-blur-sm border border-gray-200 bg-white/90 hover:bg-white transition-all ${
          isExpanded ? "rounded-b-none" : ""
        }`}
        aria-label="Weather controls"
      >
        <span className="text-xl">{getSeasonIcon()}</span>
      </button>

      {/* Expanded Controls */}
      {isExpanded && (
        <div className="fixed top-12 right-4 bg-white/90 p-3 rounded-b-lg rounded-tl-lg shadow-xl backdrop-blur-sm border border-gray-200 border-t-0 animate-fade-in">
          <p className="text-sm mb-2 text-gray-800 font-bold">
            Weather Controls:
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setWeatherIntensity(0.5)}
              className={`px-3 py-1 text-sm rounded-lg ${theme[season].controller.slow} ${theme[season].controllerHover.slow} transition flex items-center gap-2`}
            >
              <span>{getSeasonIcon()}</span>
              Slow (Mild)
            </button>
            <button
              onClick={() => setWeatherIntensity(1)}
              className={`px-3 py-1 text-sm rounded-lg ${theme[season].controller.normal} ${theme[season].controllerHover.normal} transition flex items-center gap-2`}
            >
              <span>
                {getSeasonIcon()}
                {getSeasonIcon()}
              </span>
              Normal
            </button>
            <button
              onClick={() => setWeatherIntensity(2)}
              className={`px-3 py-1 text-sm rounded-lg ${theme[season].controller.fast} ${theme[season].controllerHover.fast} transition flex items-center gap-2`}
            >
              <span>
                {getSeasonIcon()}
                {getSeasonIcon()}
                {getSeasonIcon()}
              </span>
              Fast (Intense)
            </button>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WeatherControls;
