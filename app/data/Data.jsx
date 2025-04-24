"use client";
import React, { createContext } from "react";

export const AnimeDataContext = createContext(null);

export default function AnimeDataProvider({ children }) {
  const animeData = {
    rainy: [
      {
        title: "Garden of Words",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjdiMDdlMDItOGM4Ny00YmE4LTk0MTEtMGRhM2Y4OWZkZDZkXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Drama", "Romance", "Slice of Life"],
        quote: "On rainy days, I hear the voice of the sky.",
        mood: "Melancholic",
      },
      {
        title: "Weathering With You",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Weathering_with_You_Poster.jpg/250px-Weathering_with_You_Poster.jpg",
        genres: ["Fantasy", "Romance", "Drama"],
        quote:
          "The weather is crazy, but maybe the world was crazy from the beginning.",
        mood: "Hopeful",
      },
      {
        title: "5 Centimeters Per Second",
        image:
          "https://m.media-amazon.com/images/M/MV5BODVmZjhhYTYtYzRiOC00YzFiLThlZjMtZTQxNWY0MTI1MzlmXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Drama", "Romance"],
        quote: "We shared the same view of the cherry blossoms in full bloom.",
        mood: "Nostalgic",
      },
      {
        title: "A Silent Voice",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
        genres: ["Drama", "Slice of Life"],
        quote: "No matter what happens tomorrow, I'm glad I met you today.",
        mood: "Poignant",
      },
      {
        title: "Wolf Children",
        image:
          "https://upload.wikimedia.org/wikipedia/en/9/9c/%C5%8Ckami_Kodomo_no_Ame_to_Yuki_poster.jpg",
        genres: ["Fantasy", "Slice of Life", "Drama"],
        quote: "Even if you're alone, you're not really alone.",
        mood: "Heartwarming",
      },
    ],
    summer: [
      {
        title: "Attack on Titan",
        image:
          "https://images.justwatch.com/poster/100348362/s718/season-1.jpg",
        genres: ["Action", "Drama", "Fantasy"],
        quote:
          "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        mood: "Intense",
      },
      {
        title: "One Piece",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/0*YX_RUxT7tpiGjKN6.jpg",
        genres: ["Action", "Adventure", "Comedy"],
        quote: "A man's dream will never die!",
        mood: "Adventurous",
      },
      {
        title: "Naruto",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Action", "Adventure", "Martial Arts"],
        quote:
          "Hard work is worthless for those that don't believe in themselves.",
        mood: "Motivational",
      },
      {
        title: "My Hero Academia",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@.V1.jpg",
        genres: ["Action", "Superhero", "School"],
        quote: "It's fine now. Why? Because I am here!",
        mood: "Inspiring",
      },
      {
        title: "Demon Slayer",
        image:
          "https://images.justwatch.com/poster/320272945/s718/season-1.jpg",
        genres: ["Action", "Supernatural", "Historical"],
        quote:
          "No matter how many people you may lose, you have no choice but to go on living.",
        mood: "Determined",
      },
    ],
    autumn: [
      {
        title: "Death Note",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Mystery", "Psychological", "Thriller"],
        quote:
          "In this world, there are very few people who actually trust each other.",
        mood: "Dark",
      },
      {
        title: "Tokyo Ghoul",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@.V1.jpg",
        genres: ["Action", "Horror", "Psychological"],
        quote: "It's not the world that's messed up; it's those of us in it.",
        mood: "Brooding",
      },
      {
        title: "Psycho-Pass",
        image:
          "https://m.media-amazon.com/images/M/MV5BNjQ1OTNkZGYtODVlMC00NWI0LWJiYjItMzM4M2U4NjY0ZTYwXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Sci-Fi", "Psychological", "Police"],
        quote: "Justice is always an illusion brought about by those in power.",
        mood: "Thought-provoking",
      },
      {
        title: "Monster",
        image:
          "https://upload.wikimedia.org/wikipedia/en/2/2d/Monster_%28manga_-_promo_image%29.jpg",
        genres: ["Mystery", "Psychological", "Thriller"],
        quote: "Humans are the only animals who can choose not to reproduce.",
        mood: "Philosophical",
      },
      {
        title: "Steins Gate",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Sci-Fi", "Thriller"],
        quote:
          "No one knows what the future holds. That's why its potential is infinite.",
        mood: "Mind-bending",
      },
    ],
    winter: [
      {
        title: "Violet Evergarden",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWUwNDFiNjQtYjQ0MC00MTcxLWE0MGQtNTdkYTlhZGU2NDFmXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Drama", "Fantasy"],
        quote: "I want to know what 'I love you' means.",
        mood: "Melancholic",
      },
      {
        title: "Spirited Away",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Adventure", "Fantasy", "Supernatural"],
        quote: "Once you've met someone you never really forget them.",
        mood: "Whimsical",
      },
      {
        title: "Erased",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWQ2YmI5NWMtZTY2Mi00MGUxLWFhMmEtYjVjZjMwOTNkOThjXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Mystery", "Psychological", "Supernatural"],
        quote: "If you could change the past, what would you do differently?",
        mood: "Reflective",
      },
      {
        title: "A Silent Voice",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzQ2YTM2NmYtZjEzMS00M2NiLWI3NjQtNjIyMDEzMmQ1ZDkxXkEyXkFqcGc@.V1.jpg",
        genres: ["Drama", "Slice of Life"],
        quote: "No matter what happens tomorrow, I'm glad I met you today.",
        mood: "Poignant",
      },
      {
        title: "Natsume's Book of Friends",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/88/Natsume%27s_Book_of_Friends_1.png",
        genres: ["Slice of Life", "Supernatural"],
        quote: "Even if you're alone, you're not really alone.",
        mood: "Comforting",
      },
    ],
  };

  const theme = {
    rainy: {
      background: "from-[#6b7280] via-[#4b5563] to-[#374151]",
      text: "text-white",
      icon: "🌧️",
      accent: "bg-blue-400",
      card: "bg-slate-700/80",
      description: "Overcast sky with soft rain tones",
      description1: "Gentle rains and quiet reflections",
      controller: {
        slow: "bg-gray-100 text-black-800",
        normal: "bg-gray-200 text-black-900",
        fast: "bg-gray-300 text-black-900",
      },
      controllerHover: {
        slow: "hover:bg-gray-200",
        normal: "hover:bg-gray-300",
        fast: "hover:bg-gray-400",
      },
    },
    summer: {
      background: "from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]",
      text: "text-blue-900",
      icon: "☀️",
      accent: "bg-rose-400",
      card: "bg-sky-100/80",
      description: "Vibrant summer sky with golden sunlight",
      description1: "Sunshine and adventure",
      controller: {
        slow: "bg-amber-100 text-amber-800",
        normal: "bg-amber-200 text-amber-900",
        fast: "bg-amber-300 text-amber-900",
      },
      controllerHover: {
        slow: "hover:bg-amber-200",
        normal: "hover:bg-amber-300",
        fast: "hover:bg-amber-400",
      },
    },
    autumn: {
      background: "from-[#c97b63] via-[#d6a46c] to-[#b4845c]",
      text: "text-amber-50",
      icon: "🍂",
      accent: "bg-amber-500",
      card: "bg-stone-600/80",
      description: "Soft muted sky with autumn haze",
      description1: "Golden hues and cozy moments",
      controller: {
        slow: "bg-orange-100 text-orange-800",
        normal: "bg-orange-200 text-orange-900",
        fast: "bg-orange-300 text-orange-900",
      },
      controllerHover: {
        slow: "hover:bg-orange-200",
        normal: "hover:bg-orange-300",
        fast: "hover:bg-orange-400",
      },
    },
    winter: {
      background: "from-[#0a1a30] via-[#0a3d6b] to-[#0a5fac]",
      text: "text-gray-200",
      icon: "❄️",
      accent: "bg-cyan-400",
      card: "bg-slate-200/80",
      description: "Crisp pale blue winter atmosphere",
      description1: "Snowy landscapes and warmth",
      controller: {
        slow: "bg-blue-100 text-blue-800",
        normal: "bg-blue-200 text-blue-900",
        fast: "bg-blue-300 text-blue-900",
      },
      controllerHover: {
        slow: "hover:bg-blue-200",
        normal: "hover:bg-blue-300",
        fast: "hover:bg-blue-400",
      },
    },
  };
  const footer = {
    winter: { id: "1" },
  };
  const seasonalAnime = {
    winter: [
      " Yuru Camp△ - Comfy winter camping adventures with friends",
      "Sword Art Online: Alicization - Snowy fantasy world battles",
      "Attack on Titan: Final Season - Intense winter warfare",
      "Tokyo Godfathers - Heartwarming Christmas homeless story",
      "Erased - Mystery set in snowy Hokkaido",
    ],
    autumn: [
      " Hyouka - School mysteries with beautiful autumn scenery",
      "  Spice and Wolf - Medieval merchant tale during harvest season",
      "March Comes in Like a Lion - Emotional shogi drama with fall colors",
      " Mushishi - Supernatural stories perfect for cool autumn nights",
      "Wolf Children - Touching family story spanning autumn landscapes",
    ],
    summer: [
      "  Free! - Competitive swimming with summer vibes",
      "Grand Blue - Hilarious college diving and beach adventures",
      "A Place Further Than the Universe - Antarctic expedition during summer break",
      "Barakamon - Island life with summer festivals",
      "Non Non Biyori - Relaxing countryside summer days",
    ],
    rainy: [
      "Garden of Words - Beautiful rain-themed romance",
      "Weathering With You - Supernatural rain phenomenon story",
      "The Girl Who Leapt Through Time - Time travel during rainy days",
      "5 Centimeters Per Second - Emotional stories connected by rain",
      "Violet Evergarden - Episodic tales with stunning rainy scenes",
    ],
  };
  const seasonalTheme = {
    summer: { image: "/Images/summer_footer.png" },
    winter: { image: "/Images/pngwing.com.png" },
    autumn: { image: "/Images/pngwing.com.png" },
    rainy: { image: "/Images/image-from-rawpixel-id-6757519-png.png" },
  };
  return (
    <AnimeDataContext.Provider
      value={{ animeData, theme, footer, seasonalAnime, seasonalTheme }}
    >
      {children}
    </AnimeDataContext.Provider>
  );
}
