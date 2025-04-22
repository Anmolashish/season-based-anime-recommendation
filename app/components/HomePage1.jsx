"use client";
import React, { useContext } from "react";
import { AnimeDataContext } from "../data/Data";
import AnimeCard from "./AnimeCard";

export default function HomePage1({ season }) {
  const { animeData, theme } = useContext(AnimeDataContext);
  const recommendedAnimes = animeData[season];
  const popularAnimes = [...animeData[season]].reverse();

  const currenttext = theme[season].text;

  return (
    <main className="min-h-screen bg-gradient-to-b  pb-16">
      {/* Recommended Section */}
      <section className="pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl sm:text-3xl font-bold ${currenttext}`}>
            Recommended For You
          </h2>
          <span className="text-xl animate-pulse"></span>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
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
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl sm:text-3xl font-bold ${currenttext}`}>
            Popular This Season
          </h2>
          <span className="text-xl animate-pulse"></span>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
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
        .scrollbar-thin::-webkit-scrollbar {
          height: 0px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.7);
        }
      `}</style>
    </main>
  );
}
