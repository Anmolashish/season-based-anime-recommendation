"use client";
import React, { useContext } from "react";
import { AnimeDataContext } from "../data/Data";
import AnimeCard from "./AnimeCard";

export default function HomePage1({ season }) {
  const { animeData, theme } = useContext(AnimeDataContext);
  const recommendedAnimes = animeData[season];
  const popularAnimes = [...animeData[season]].reverse();
  const currenttext = theme[season].text;
  const currentAccent = theme[season].accent;

  return (
    <main className="min-h-screen  pb-16">
      {/* Recommended Section */}
      <section className="pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative z-20 mb-14 group">
          <div className="flex items-center gap-6">
            {/* Left divider - enhanced */}
            <div className="relative flex-grow h-[1.5px] bg-gray-200/80 overflow-hidden">
              <div
                className={`absolute left-0 top-0 w-10 h-full ${currentAccent} transform -translate-x-full group-hover:translate-x-[calc(100vw+20px)] transition-transform duration-900 ease-[cubic-bezier(0.19,1,0.22,1)]`}
              ></div>
              <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${currentAccent} opacity-0 group-hover:opacity-100 transition-opacity delay-400 duration-500`}
              ></div>
            </div>

            {/* Heading - perfected */}
            <h2
              className={`text-3xl md:text-4xl font-medium ${currenttext} tracking-tight whitespace-nowrap px-2`}
            >
              <span className="relative inline-block pb-1">
                Recommended For You
                {/* Enhanced underline animation */}
              </span>
            </h2>

            {/* Right divider - mirrored */}
            <div className="relative flex-grow h-[1.5px] bg-gray-200/80 overflow-hidden">
              <div
                className={`absolute right-0 top-0 w-10 h-full ${currentAccent} transform translate-x-full group-hover:-translate-x-[calc(100vw+20px)] transition-transform duration-900 ease-[cubic-bezier(0.19,1,0.22,1)]`}
              ></div>
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${currentAccent} opacity-0 group-hover:opacity-100 transition-opacity delay-400 duration-500`}
              ></div>
            </div>
          </div>

          {/* Subtle background highlight on hover */}
          <div className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide pb-6 -mx-4 ">
            <div className="flex space-x-6">
              {recommendedAnimes.map((anime) => (
                <AnimeCard key={`rec-${anime.title}`} anime={anime} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative z-20 mb-14 group">
          <div className="flex items-center gap-6">
            {/* Left divider - enhanced */}
            <div className="relative flex-grow h-[1.5px] bg-gray-200/80 overflow-hidden">
              <div
                className={`absolute left-0 top-0 w-10 h-full ${currentAccent} transform -translate-x-full group-hover:translate-x-[calc(100vw+20px)] transition-transform duration-900 ease-[cubic-bezier(0.19,1,0.22,1)]`}
              ></div>
              <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${currentAccent} opacity-0 group-hover:opacity-100 transition-opacity delay-400 duration-500`}
              ></div>
            </div>

            {/* Heading - perfected */}
            <h2
              className={`text-3xl md:text-4xl font-medium ${currenttext} tracking-tight whitespace-nowrap px-2`}
            >
              <span className="relative inline-block pb-1">
                Popular This Season
                {/* Enhanced underline animation */}
              </span>
            </h2>

            {/* Right divider - mirrored */}
            <div className="relative flex-grow h-[1.5px] bg-gray-200/80 overflow-hidden">
              <div
                className={`absolute right-0 top-0 w-10 h-full ${currentAccent} transform translate-x-full group-hover:-translate-x-[calc(100vw+20px)] transition-transform duration-900 ease-[cubic-bezier(0.19,1,0.22,1)]`}
              ></div>
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${currentAccent} opacity-0 group-hover:opacity-100 transition-opacity delay-400 duration-500`}
              ></div>
            </div>
          </div>

          {/* Subtle background highlight on hover */}
          <div className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide pb-6 -mx-4 ">
            <div className="flex space-x-6">
              {popularAnimes.map((anime) => (
                <AnimeCard key={`pop-${anime.title}`} anime={anime} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
