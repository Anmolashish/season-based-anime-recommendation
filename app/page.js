"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SeasonalGateway() {
  const [hoveredSeason, setHoveredSeason] = useState(null);
  const router = useRouter();

  const seasons = [
    {
      name: "Rainy",
      color: "bg-gradient-to-br from-[#666D7B] to-[#4A5060]",
      bgColor: "from-[#E0E3E7] to-[#C1C6D0]",
      image: "/Images/rainy.jpeg",
      description: "Gentle rains and quiet reflections",
      path: "/rainy",
    },
    {
      name: "Summer",
      color: "bg-gradient-to-br from-yellow-200 to-orange-300",
      bgColor: "from-amber-100 to-yellow-100",
      image: "/Images/summer.jpeg",
      description: "Sunshine and adventure",
      path: "/summer",
    },
    {
      name: "Autumn",
      color: "bg-gradient-to-br from-amber-400 to-red-700",
      bgColor: "from-amber-50 to-red-100",
      image: "/Images/autuman.jpeg",
      description: "Golden hues and cozy moments",
      path: "/autumn",
    },
    {
      name: "Winter",
      color: "bg-gradient-to-br from-blue-100 to-blue-300",
      bgColor: "from-blue-50 to-blue-100",
      image: "/Images/winter.jpeg",
      description: "Snowy landscapes and warmth",
      path: "/winter",
    },
  ];

  const handleSurpriseMe = () => {
    const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
    router.push(randomSeason.path);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${
        hoveredSeason
          ? seasons.find((s) => s.name === hoveredSeason)?.bgColor
          : "from-gray-50 to-gray-100"
      } transition-all duration-500 py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto min-h-[80vh] flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Explore the Seasons
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Select a season to discover its unique anime recommendations and
            atmospheric stories
          </p>
        </div>

        {/* Season Cards Section */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {seasons.map((season) => (
            <Link
              href={season.path}
              key={season.name}
              className={`relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ${
                hoveredSeason && hoveredSeason !== season.name
                  ? "opacity-50 scale-90 blur-[2px] brightness-90" // More pronounced unfocused effect
                  : "hover:shadow-2xl hover:scale-[1.05]" // More pronounced hover effect
              } h-full min-h-[340px]`}
              onMouseEnter={() => setHoveredSeason(season.name)}
              onMouseLeave={() => setHoveredSeason(null)}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 ${season.color} ${
                  hoveredSeason === season.name ? "opacity-100" : "opacity-90"
                } transition-opacity duration-300`}
              />

              {/* Season Image */}
              <div className="relative h-full w-full">
                <Image
                  src={season.image}
                  alt={season.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-all duration-500 ${
                    hoveredSeason === season.name
                      ? "scale-105 brightness-110"
                      : "group-hover:scale-103"
                  }`}
                  priority
                />
              </div>

              {/* Season Name */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h2
                  className={`text-3xl font-bold text-white text-center transition-all duration-300 ${
                    hoveredSeason === season.name
                      ? "translate-y-[-30px] text-4xl"
                      : "group-hover:translate-y-[-20px]"
                  }`}
                >
                  {season.name}
                </h2>
              </div>

              {/* Hidden Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end items-center p-8 transition-all duration-500 ${
                  hoveredSeason === season.name
                    ? "opacity-100 bg-black/20"
                    : "opacity-0 group-hover:opacity-100 group-hover:bg-black/10"
                }`}
              >
                <p className="text-white/90 text-center text-lg mb-6">
                  {season.description}
                </p>
                <button
                  className={`px-6 py-3 bg-white text-gray-800 rounded-full font-semibold text-lg transition-all ${
                    hoveredSeason === season.name
                      ? "scale-110 bg-white"
                      : "group-hover:bg-white"
                  }`}
                >
                  Explore {season.name} →
                </button>
              </div>

              {/* Hover Border Effect */}
              {hoveredSeason === season.name && (
                <div className="absolute inset-0 border-4 border-white/70 rounded-3xl pointer-events-none" />
              )}
            </Link>
          ))}
        </div>

        {/* Surprise Me Button Section */}
        <div className="mt-auto pt-12 text-center">
          <p className="text-gray-600 mb-3 text-sm">
            Can&apos;t decide which season to explore first?
          </p>
          <button
            onClick={handleSurpriseMe}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:brightness-110"
          >
            Surprise Me with a Random Season
          </button>
        </div>
      </div>
    </div>
  );
}
