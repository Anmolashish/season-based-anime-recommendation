"use client";
import React, { createContext } from "react";

export const AnimeDataContext = createContext(null);

export default function AnimeDataProvider({ children }) {
  const animeData = {
    rainy: [
      {
        title: "Garden of Words",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTM3NDM5MzY5OV5BMl5BanBnXkFtZTcwNjExMDUwOQ@@._V1_.jpg",
        genres: ["Drama", "Romance", "Slice of Life"],
        quote: "On rainy days, I hear the voice of the sky.",
        mood: "Melancholic",
      },
      {
        title: "Weathering With You",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzBmMWE4ODgtMzUyNy00YWQ4LTgyOTItNzE1NTk5OWI2N2M4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        genres: ["Fantasy", "Romance", "Drama"],
        quote:
          "The weather is crazy, but maybe the world was crazy from the beginning.",
        mood: "Hopeful",
      },
      {
        title: "5 Centimeters Per Second",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTM1NjUyMDI3OV5BMl5BanBnXkFtZTcwNjg1ODkzMw@@._V1_.jpg",
        genres: ["Drama", "Romance"],
        quote: "We shared the same view of the cherry blossoms in full bloom.",
        mood: "Nostalgic",
      },
      {
        title: "A Silent Voice",
        image:
          "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        genres: ["Drama", "Slice of Life"],
        quote: "No matter what happens tomorrow, I'm glad I met you today.",
        mood: "Poignant",
      },
      {
        title: "Wolf Children",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjEyOTk1MDk1Ml5BMl5BanBnXkFtZTcwNzAxNzMzNw@@._V1_.jpg",
        genres: ["Fantasy", "Slice of Life", "Drama"],
        quote: "Even if you're alone, you're not really alone.",
        mood: "Heartwarming",
      },
    ],
    summer: [
      {
        title: "Attack on Titan",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Action", "Drama", "Fantasy"],
        quote:
          "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        mood: "Intense",
      },
      {
        title: "One Piece",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Action", "Adventure", "Comedy"],
        quote: "A man's dream will never die!",
        mood: "Adventurous",
      },
      {
        title: "Naruto",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Action", "Adventure", "Martial Arts"],
        quote:
          "Hard work is worthless for those that don't believe in themselves.",
        mood: "Motivational",
      },
      {
        title: "My Hero Academia",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Action", "Superhero", "School"],
        quote: "It's fine now. Why? Because I am here!",
        mood: "Inspiring",
      },
      {
        title: "Demon Slayer",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Action", "Supernatural", "Historical"],
        quote:
          "No matter how many people you may lose, you have no choice but to go on living.",
        mood: "Determined",
      },
    ],
    autumn: [
      {
        title: "Death Note",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Mystery", "Psychological", "Thriller"],
        quote:
          "In this world, there are very few people who actually trust each other.",
        mood: "Dark",
      },
      {
        title: "Tokyo Ghoul",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Action", "Horror", "Psychological"],
        quote: "It's not the world that's messed up; it's those of us in it.",
        mood: "Brooding",
      },
      {
        title: "Psycho-Pass",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Sci-Fi", "Psychological", "Police"],
        quote: "Justice is always an illusion brought about by those in power.",
        mood: "Thought-provoking",
      },
      {
        title: "Monster",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Mystery", "Psychological", "Thriller"],
        quote: "Humans are the only animals who can choose not to reproduce.",
        mood: "Philosophical",
      },
      {
        title: "Steins;Gate",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Sci-Fi", "Thriller"],
        quote:
          "No one knows what the future holds. That's why its potential is infinite.",
        mood: "Mind-bending",
      },
    ],
    winter: [
      {
        title: "Violet Evergarden",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Drama", "Fantasy"],
        quote: "I want to know what 'I love you' means.",
        mood: "Melancholic",
      },
      {
        title: "Spirited Away",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Adventure", "Fantasy", "Supernatural"],
        quote: "Once you've met someone you never really forget them.",
        mood: "Whimsical",
      },
      {
        title: "Erased",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Mystery", "Psychological", "Supernatural"],
        quote: "If you could change the past, what would you do differently?",
        mood: "Reflective",
      },
      {
        title: "A Silent Voice",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Drama", "Slice of Life"],
        quote: "No matter what happens tomorrow, I'm glad I met you today.",
        mood: "Poignant",
      },
      {
        title: "Natsume's Book of Friends",
        image: "https://i.imgur.com/JzQJQYz.jpg",
        genres: ["Slice of Life", "Supernatural"],
        quote: "Even if you're alone, you're not really alone.",
        mood: "Comforting",
      },
    ],
  };

  const theme = {
    rainy: {
      background: "from-[#6b7280] via-[#4b5563] to-[#374151]", // Cloudy gray gradient
      text: "text-white",
      icon: "🌧️",
      accent: "bg-blue-400",
      card: "bg-slate-700/80",
      description: "Overcast sky with soft rain tones",
    },
    summer: {
      background: "from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]", // Bright clear blue sky
      text: "text-gray-900",
      icon: "☀️",
      accent: "bg-amber-300",
      card: "bg-sky-100/80",
      description: "Vibrant summer sky with golden sunlight",
    },
    autumn: {
      background: "from-[#a8a29e] via-[#78716c] to-[#57534e]", // Hazy autumn sky
      text: "text-amber-50",
      icon: "🍂",
      accent: "bg-amber-500",
      card: "bg-stone-600/80",
      description: "Soft muted sky with autumn haze",
    },
    winter: {
      background: "from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc]", // Pale winter sky
      text: "text-gray-800",
      icon: "❄️",
      accent: "bg-cyan-400",
      card: "bg-slate-200/80",
      description: "Crisp pale blue winter atmosphere",
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
    summer: { image: "/Images/summer.png" },
    winter: { image: "/Images/pngwing.com.png" },
    autumn: [],
    rainy: [],
  };
  return (
    <AnimeDataContext.Provider
      value={{ animeData, theme, footer, seasonalAnime, seasonalTheme }}
    >
      {children}
    </AnimeDataContext.Provider>
  );
}
