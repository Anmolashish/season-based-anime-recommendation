import React, { useState } from "react";

const AnimeCard = ({ anime }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mood color mapping
  const moodColors = {
    Bittersweet: "from-pink-400 to-red-500",
    Wholesome: "from-emerald-400 to-teal-500",
    Emotional: "from-blue-400 to-indigo-500",
    Heartwarming: "from-amber-400 to-orange-500",
    Nostalgic: "from-purple-400 to-fuchsia-500",
    Intense: "from-red-500 to-amber-500",
    Adventurous: "from-green-400 to-lime-500",
    Motivational: "from-yellow-400 to-amber-500",
    Inspiring: "from-cyan-400 to-blue-500",
    Determined: "from-rose-400 to-pink-500",
    Dark: "from-gray-700 to-gray-900",
    Brooding: "from-violet-600 to-purple-800",
    "Thought-provoking": "from-indigo-500 to-blue-700",
    Philosophical: "from-slate-600 to-gray-800",
    "Mind-bending": "from-purple-500 to-indigo-700",
    Melancholic: "from-blue-600 to-indigo-800",
    Whimsical: "from-fuchsia-400 to-pink-500",
    Reflective: "from-sky-400 to-blue-500",
    Poignant: "from-rose-500 to-pink-600",
    Comforting: "from-teal-300 to-emerald-400",
  };

  return (
    <>
      {/* Clickable Card */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="w-70 max-md:w-60 z-20 max-w-full bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 m-4 group cursor-pointer"
      >
        {/* Rest of your existing card content remains the same */}
        {/* Image with overlay effect */}
        <div className="relative max-md:h-40 h-50 overflow-hidden">
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Mood badge with dynamic gradient */}
          <span
            className={`absolute bottom-4 right-4 text-white px-3 py-1 rounded-full text-xs font-bold uppercase 
            bg-gradient-to-r ${
              moodColors[anime.mood] || "from-gray-600 to-gray-800"
            }
            shadow-md transition-all duration-300 group-hover:scale-105`}
          >
            {anime.mood}
          </span>
        </div>

        {/* Content with subtle animation */}
        <div className="p-5 transition-all duration-500 group-hover:bg-gray-50/80">
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {anime.title}
          </h3>

          {/* Genres with hover effects */}
          <div className="flex flex-wrap gap-2 mb-4">
            {anime.genres.map((genre, index) => (
              <span
                key={index}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors duration-200"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Quote with animated decoration */}
          <div className="relative">
            <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-pink-400 to-blue-500 rounded-full"></div>
            <p className="italic text-gray-600 text-sm pl-4 pr-2 leading-relaxed line-clamp-3">
              "{anime.quote}"
            </p>
          </div>

          {/* Rating/Score (optional) */}
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">4.0</span>
            </div>
            <span className="text-xs text-gray-400 ml-auto">TV Series</span>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed w-full inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-opacity-75">
          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl">
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal content */}
            <div className="flex flex-col md:flex-row">
              {/* Image section */}
              <div className="md:w-1/3 relative">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-2xl font-bold text-white">
                    {anime.title}
                  </h2>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400 mr-1">★★★★☆</span>
                    <span className="text-white text-sm ml-1">4.0</span>
                  </div>
                </div>
              </div>

              {/* Details section */}
              <div className="md:w-2/3 p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Synopsis
                  </h3>
                  <p className="text-gray-600">
                    {anime.synopsis || "No synopsis available."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Status
                    </h4>
                    <p className="text-gray-800">{anime.status || "Unknown"}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Episodes
                    </h4>
                    <p className="text-gray-800">
                      {anime.episodes || "Unknown"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Genre</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {anime.genres.map((genre, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Mood</h4>
                    <span
                      className={`inline-block mt-1 text-white px-2 py-1 rounded-full text-xs font-bold uppercase 
                      bg-gradient-to-r ${
                        moodColors[anime.mood] || "from-gray-600 to-gray-800"
                      }`}
                    >
                      {anime.mood}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Notable Quote
                  </h3>
                  <blockquote className="italic text-gray-600 border-l-4 border-blue-400 pl-4 py-1">
                    "{anime.quote}"
                  </blockquote>
                </div>

                {/* Trailer section */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Trailer
                  </h3>
                  {anime.trailerUrl ? (
                    <a
                      href={anime.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Trailer
                    </a>
                  ) : (
                    <p className="text-gray-500">No trailer available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeCard;
