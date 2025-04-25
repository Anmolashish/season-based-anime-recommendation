"use client";
import React, { useContext, useState, useEffect } from "react";
import { AnimeDataContext } from "../data/Data";
import HomePage1 from "./HomePage1";
import Footer from "./Footer";
import WeatherControls from "./WeatherControls";
import Homepage2 from "./Homepage2";
import Jagjeet from "./Jagjeet";

export default function MainSection(props) {
  const { theme } = useContext(AnimeDataContext);
  const currentBg = theme[props.season].background;
  const [weatherIntensity, setWeatherIntensity] = useState(1); // 0.5 = slow, 1 = normal, 2 = fast
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getIntensityMultiplier = () => {
    // Returns values based on intensity (0.5-2)
    return {
      opacity:
        weatherIntensity === 0.5 ? 0.5 : weatherIntensity === 1 ? 0.7 : 0.9,
      blur: weatherIntensity === 0.5 ? 15 : weatherIntensity === 1 ? 25 : 35,
      scale:
        weatherIntensity === 0.5 ? 1.2 : weatherIntensity === 1 ? 1.5 : 1.8,
      particleCount:
        weatherIntensity === 0.5 ? 15 : weatherIntensity === 1 ? 30 : 45,
    };
  };

  const getSeasonalParticles = () => {
    if (!isClient) return null;

    const count = props.season === "rainy" ? 580 : 180;
    const particles = Array.from({ length: count }).map((_, i) => {
      const commonStyles = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${(Math.random() * 20 + 2) / weatherIntensity}s`,
        animationDelay: `${Math.random() * 45}s`,
        opacity: Math.random() * 0.7 + 0.3,
        zIndex: Math.random() > 0.7 ? 15 : 5,
      };

      switch (props.season) {
        case "rainy":
          return (
            <div
              key={`rain-${i}`}
              className="raindrop"
              style={{
                ...commonStyles,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 20 + 10}px`,
                filter: `blur(${Math.random() * 0.5}px)`,
              }}
            />
          );
        case "summer":
          if (i > getIntensityMultiplier().particleCount) return null;
          return (
            <div
              key={`dust-${i}`}
              className="dust-particle"
              style={{
                ...commonStyles,
                width: `${Math.random() * 4 + 2 * weatherIntensity}px`,
                height: `${Math.random() * 4 + 2 * weatherIntensity}px`,
                backgroundColor: `rgba(255, 200, 50, ${
                  Math.random() * 0.6 + 0.2 * weatherIntensity
                })`,
                borderRadius: "50%",
                filter: `blur(${Math.random() * 2 * weatherIntensity}px)`,

                boxShadow: `0 0 ${
                  Math.random() * 10 + 5 * weatherIntensity
                }px rgba(255, 200, 50, ${0.3 * weatherIntensity})`,
              }}
            />
          );
        case "autumn":
          return (
            <div
              key={`leaf-${i}`}
              className="leaf"
              style={{
                ...commonStyles,
                fontSize: `${Math.random() * 16 + 8}px`,
                filter: `blur(${Math.random() * 0.5}px)`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {["🍁", "🍂"][Math.floor(Math.random() * 2)]}
            </div>
          );
        case "winter":
          return (
            <div
              key={`snow-${i}`}
              className="snowflake"
              style={{
                ...commonStyles,
                fontSize: `${Math.random() * 14 + 6}px`,
                filter: `blur(${Math.random() * 2}px)`,
              }}
            >
              {["❄", "❅", "❆", "✦"][Math.floor(Math.random() * 4)]}
            </div>
          );
        default:
          return null;
      }
    });

    return particles;
  };

  return (
    <div className={`w-full h-fit bg-gradient-to-b ${currentBg} relative`}>
      {/* Weather Controls */}
      <WeatherControls
        season={props.season}
        theme={theme}
        setWeatherIntensity={setWeatherIntensity}
      />

      {/* Seasonal Animation */}
      <div className="absolute inset-0 -top-20 overflow-hidden pointer-events-none">
        {getSeasonalParticles()}

        {/* Enhanced summer heat effects with intensity control */}
        {props.season === "summer" &&
          isClient &&
          (() => {
            const intensity = getIntensityMultiplier();
            return (
              <>
                {/* Horizontal heat waves */}
                <div
                  className="heat-wave"
                  style={{
                    animationDuration: `${12 / weatherIntensity}s`,
                    opacity: intensity.opacity * 0.9,
                    filter: `blur(${intensity.blur}px)`,
                  }}
                />
                <div
                  className="heat-wave"
                  style={{
                    animationDuration: `${18 / weatherIntensity}s`,
                    animationDelay: "4s",
                    opacity: intensity.opacity * 0.8,
                    filter: `blur(${intensity.blur * 0.9}px)`,
                  }}
                />

                {/* Vertical heat waves */}
                <div
                  className="heat-wave-vertical"
                  style={{
                    animationDuration: `${22 / weatherIntensity}s`,
                    animationDelay: "2s",
                    opacity: intensity.opacity * 0.7,
                    filter: `blur(${intensity.blur * 0.8}px)`,
                  }}
                />
                <div
                  className="heat-wave-vertical"
                  style={{
                    animationDuration: `${15 / weatherIntensity}s`,
                    animationDelay: "7s",
                    opacity: intensity.opacity * 0.6,
                    filter: `blur(${intensity.blur * 0.7}px)`,
                  }}
                />

                {/* Heat shimmer overlay */}
                <div
                  className="heat-shimmer"
                  style={{
                    opacity: intensity.opacity * 0.3,
                  }}
                />

                {/* Hot air rising effect */}
                <div
                  className="hot-air-rise"
                  style={{
                    animationDuration: `${30 / weatherIntensity}s`,
                    filter: `blur(${intensity.blur * 1.2}px)`,
                    opacity: intensity.opacity * 0.8,
                  }}
                />
                <div
                  className="hot-air-rise"
                  style={{
                    animationDuration: `${40 / weatherIntensity}s`,
                    animationDelay: "15s",
                    filter: `blur(${intensity.blur}px)`,
                    opacity: intensity.opacity * 0.7,
                  }}
                />

                {/* Intense heat spots */}
                <div
                  className="heat-spot"
                  style={{
                    left: "20%",
                    top: "30%",
                    animationDuration: `${8 / weatherIntensity}s`,
                    filter: `blur(${intensity.blur * 0.8}px)`,
                    opacity: intensity.opacity * 0.6,
                  }}
                />
                <div
                  className="heat-spot"
                  style={{
                    left: "70%",
                    top: "60%",
                    animationDuration: `${12 / weatherIntensity}s`,
                    animationDelay: "3s",
                    filter: `blur(${intensity.blur * 0.7}px)`,
                    opacity: intensity.opacity * 0.5,
                  }}
                />
              </>
            );
          })()}
      </div>

      {/* Main Content */}
      <Jagjeet season={props.season}/>
      <HomePage1 season={props.season} />
      <Homepage2 season={props.season}/>
      <Footer season={props.season} />

      {/* CSS for All Animations */}
      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(500vh) rotate(360deg);
          }
        }
        @keyframes rain-fall {
          0% {
            transform: translateY(-10vh);
          }
          100% {
            transform: translateY(500vh);
          }
        }
        @keyframes heat-distortion {
          0% {
            transform: translateX(-20%) scaleY(var(--heat-scale))
              scaleX(var(--heat-scale));
            opacity: var(--heat-opacity-start);
          }
          50% {
            opacity: var(--heat-opacity-peak);
            transform: translateX(50%) scaleY(calc(var(--heat-scale) * 1.2))
              scaleX(calc(var(--heat-scale) * 1.2));
          }
          100% {
            transform: translateX(120%) scaleY(var(--heat-scale))
              scaleX(var(--heat-scale));
            opacity: var(--heat-opacity-end);
          }
        }
        @keyframes heat-distortion-vertical {
          0% {
            transform: translateY(-20%) scaleX(var(--heat-scale))
              scaleY(var(--heat-scale));
            opacity: var(--heat-opacity-start);
          }
          50% {
            opacity: var(--heat-opacity-peak);
            transform: translateY(50%) scaleX(calc(var(--heat-scale) * 1.2))
              scaleY(calc(var(--heat-scale) * 1.2));
          }
          100% {
            transform: translateY(120%) scaleX(var(--heat-scale))
              scaleY(var(--heat-scale));
            opacity: var(--heat-opacity-end);
          }
        }
        @keyframes hot-air-rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: var(--heat-opacity-peak);
          }
          100% {
            transform: translateY(-100vh) scale(calc(var(--heat-scale) * 1.1));
            opacity: 0;
          }
        }
        @keyframes heat-spot-pulse {
          0% {
            transform: scale(1);
            opacity: var(--heat-opacity-start);
          }
          50% {
            transform: scale(calc(var(--heat-scale) * 0.8));
            opacity: var(--heat-opacity-peak);
          }
          100% {
            transform: scale(1);
            opacity: var(--heat-opacity-start);
          }
        }
        @keyframes shimmer {
          0% {
            opacity: var(--heat-opacity-start);
            transform: translateY(0);
          }
          50% {
            opacity: var(--heat-opacity-mid);
            transform: translateY(-5px);
          }
          100% {
            opacity: var(--heat-opacity-start);
            transform: translateY(0);
          }
        }

        .snowflake,
        .leaf {
          position: absolute;
          color: white;
          user-select: none;
          pointer-events: none;
          animation-name: fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
        }
        .dust-particle {
          position: absolute;
          user-select: none;
          pointer-events: none;
          animation-name: fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        .raindrop {
          position: absolute;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.8)
          );
          user-select: none;
          pointer-events: none;
          animation-name: rain-fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        .leaf {
          color: #eab308;
        }
        .heat-wave {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 245, 180, 0.6) 20%,
            rgba(255, 220, 100, 0.8) 50%,
            rgba(255, 245, 180, 0.6) 80%,
            rgba(255, 255, 255, 0) 100%
          );
          animation-name: heat-distortion;
          animation-iteration-count: infinite;
          pointer-events: none;
          transform-origin: center;
          mix-blend-mode: overlay;
          z-index: 10;
          --heat-scale: 1.4;
          --heat-opacity-start: 0.5;
          --heat-opacity-peak: 0.8;
          --heat-opacity-end: 0.4;
        }
        .heat-wave-vertical {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 245, 180, 0.5) 20%,
            rgba(255, 220, 100, 0.7) 50%,
            rgba(255, 245, 180, 0.5) 80%,
            rgba(255, 255, 255, 0) 100%
          );
          animation-name: heat-distortion-vertical;
          animation-iteration-count: infinite;
          pointer-events: none;
          transform-origin: center;
          mix-blend-mode: overlay;
          z-index: 10;
          --heat-scale: 1.3;
          --heat-opacity-start: 0.4;
          --heat-opacity-peak: 0.7;
          --heat-opacity-end: 0.3;
        }
        .heat-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          pointer-events: none;
          z-index: 5;
          animation: shimmer 6s infinite ease-in-out;
          --heat-opacity-start: 0.2;
          --heat-opacity-mid: 0.4;
        }
        .hot-air-rise {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 200vw;
          height: 200vh;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 230, 120, 0.3) 0%,
            rgba(255, 230, 120, 0) 70%
          );
          transform: translateX(-50%);
          pointer-events: none;
          animation-name: hot-air-rise;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          z-index: 8;
          --heat-scale: 1;
          --heat-opacity-peak: 0.4;
        }
        .heat-spot {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            rgba(255, 230, 100, 0.5) 0%,
            rgba(255, 230, 100, 0) 70%
          );
          pointer-events: none;
          animation: heat-spot-pulse infinite ease-in-out;
          z-index: 7;
          transform: translate(-50%, -50%);
          --heat-scale: 1;
          --heat-opacity-start: 0.3;
          --heat-opacity-peak: 0.6;
        }
      `}</style>
    </div>
  );
}
