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
        synopsis:
          "A 15-year-old boy and 27-year-old woman find an unlikely friendship on rainy mornings in a Japanese garden.",
        status: "Movie",
        episodes: 1,
        trailerUrl: "https://www.youtube.com/watch?v=WZvGmS50XaY",
      },
      {
        title: "Weathering With You",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Weathering_with_You_Poster.jpg/250px-Weathering_with_You_Poster.jpg",
        genres: ["Fantasy", "Romance", "Drama"],
        quote:
          "The weather is crazy, but maybe the world was crazy from the beginning.",
        mood: "Hopeful",
        synopsis:
          "A high-school boy runs away to Tokyo and befriends a girl who can manipulate the weather.",
        status: "Movie",
        episodes: 1,
        trailerUrl: "https://www.youtube.com/watch?v=Q6iK6DjV_iE",
      },
      {
        title: "5 Centimeters Per Second",
        image:
          "https://m.media-amazon.com/images/M/MV5BODVmZjhhYTYtYzRiOC00YzFiLThlZjMtZTQxNWY0MTI1MzlmXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Drama", "Romance"],
        quote: "We shared the same view of the cherry blossoms in full bloom.",
        mood: "Nostalgic",
        synopsis:
          "A story about childhood friends Takaki and Akari and the distance that grows between them.",
        status: "Movie",
        episodes: 3,
        trailerUrl: "https://www.youtube.com/watch?v=wdM7athAem0",
      },
      {
        title: "A Silent Voice",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
        genres: ["Drama", "Slice of Life"],
        quote: "No matter what happens tomorrow, I'm glad I met you today.",
        mood: "Poignant",
        synopsis:
          "A former bully seeks redemption by reconnecting with the deaf girl he tormented in elementary school.",
        status: "Movie",
        episodes: 1,
        trailerUrl: "https://www.youtube.com/watch?v=nfK6UgLra7g",
      },
      {
        title: "Wolf Children",
        image:
          "https://upload.wikimedia.org/wikipedia/en/9/9c/%C5%8Ckami_Kodomo_no_Ame_to_Yuki_poster.jpg",
        genres: ["Fantasy", "Slice of Life", "Drama"],
        quote: "Even if you're alone, you're not really alone.",
        mood: "Heartwarming",
        synopsis:
          "A young mother raises her half-wolf children in the countryside after their werewolf father dies.",
        status: "Movie",
        episodes: 1,
        trailerUrl: "https://www.youtube.com/watch?v=8WQqcy5xPlQ",
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
        synopsis:
          "Humanity fights for survival against man-eating Titans in this dark fantasy series.",
        status: "Completed",
        episodes: 89,
        trailerUrl: "https://www.youtube.com/watch?v=MGRm4IzK1SQ",
      },
      {
        title: "One Piece",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/0*YX_RUxT7tpiGjKN6.jpg",
        genres: ["Action", "Adventure", "Comedy"],
        quote: "A man's dream will never die!",
        mood: "Adventurous",
        synopsis:
          "Monkey D. Luffy and his pirate crew search for the ultimate treasure to become Pirate King.",
        status: "Ongoing",
        episodes: "1000+",
        trailerUrl: "https://www.youtube.com/watch?v=JufLdL0mImo",
      },
      {
        title: "Naruto",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Action", "Adventure", "Martial Arts"],
        quote:
          "Hard work is worthless for those that don't believe in themselves.",
        mood: "Motivational",
        synopsis:
          "Naruto Uzumaki, a young ninja, seeks recognition and dreams of becoming the Hokage.",
        status: "Completed",
        episodes: 220,
        trailerUrl: "https://www.youtube.com/watch?v=-G9BqkgZXRA",
      },
      {
        title: "My Hero Academia",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@.V1.jpg",
        genres: ["Action", "Superhero", "School"],
        quote: "It's fine now. Why? Because I am here!",
        mood: "Inspiring",
        synopsis:
          "In a world of superpowers, a quirkless boy inherits powers from the world's greatest hero.",
        status: "Ongoing",
        episodes: "100+",
        trailerUrl: "https://www.youtube.com/watch?v=w1A3tLN9j7s",
      },
      {
        title: "Demon Slayer",
        image:
          "https://images.justwatch.com/poster/320272945/s718/season-1.jpg",
        genres: ["Action", "Supernatural", "Historical"],
        quote:
          "No matter how many people you may lose, you have no choice but to go on living.",
        mood: "Determined",
        synopsis:
          "Tanjiro Kamado becomes a demon slayer to avenge his family and cure his demon-turned sister.",
        status: "Ongoing",
        episodes: 44,
        trailerUrl: "https://www.youtube.com/watch?v=VQGCKyvzIM4",
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
        synopsis:
          "A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name.",
        status: "Completed",
        episodes: 37,
        trailerUrl: "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
      },
      {
        title: "Tokyo Ghoul",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@.V1.jpg",
        genres: ["Action", "Horror", "Psychological"],
        quote: "It's not the world that's messed up; it's those of us in it.",
        mood: "Brooding",
        synopsis:
          "A college student becomes half-ghoul after an encounter with one and must navigate both worlds.",
        status: "Completed",
        episodes: 12,
        trailerUrl: "https://www.youtube.com/watch?v=vkR0ueJmFr4",
      },
      {
        title: "Psycho-Pass",
        image:
          "https://m.media-amazon.com/images/M/MV5BNjQ1OTNkZGYtODVlMC00NWI0LWJiYjItMzM4M2U4NjY0ZTYwXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Sci-Fi", "Psychological", "Police"],
        quote: "Justice is always an illusion brought about by those in power.",
        mood: "Thought-provoking",
        synopsis:
          "In a dystopian future, inspectors work to apprehend criminals before they commit crimes using a predictive system.",
        status: "Completed",
        episodes: 22,
        trailerUrl: "https://www.youtube.com/watch?v=K4zm30yeHHE",
      },
      {
        title: "Monster",
        image:
          "https://upload.wikimedia.org/wikipedia/en/2/2d/Monster_%28manga_-_promo_image%29.jpg",
        genres: ["Mystery", "Psychological", "Thriller"],
        quote: "Humans are the only animals who can choose not to reproduce.",
        mood: "Philosophical",
        synopsis:
          "A brilliant neurosurgeon saves a boy's life, only to discover years later that the boy became a serial killer.",
        status: "Completed",
        episodes: 74,
        trailerUrl: "https://www.youtube.com/watch?v=9gSQg1i_q2g",
      },
      {
        title: "Steins Gate",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Sci-Fi", "Thriller"],
        quote:
          "No one knows what the future holds. That's why its potential is infinite.",
        mood: "Mind-bending",
        synopsis:
          "A group of friends accidentally create a time machine and must deal with the consequences of altering the past.",
        status: "Completed",
        episodes: 24,
        trailerUrl: "https://www.youtube.com/watch?v=uMYhjVwp0Fk",
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
        synopsis:
          "A former child soldier becomes an Auto Memory Doll, writing letters that connect people's feelings.",
        status: "Completed",
        episodes: 13,
        trailerUrl: "https://www.youtube.com/watch?v=9W3JcA1xwC4",
      },
      {
        title: "Spirited Away",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Adventure", "Fantasy", "Supernatural"],
        quote: "Once you've met someone you never really forget them.",
        mood: "Whimsical",
        synopsis:
          "A young girl trapped in a spirit world works at a bathhouse to free herself and her parents.",
        status: "Movie",
        episodes: 1,
        trailerUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
      },
      {
        title: "Erased",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWQ2YmI5NWMtZTY2Mi00MGUxLWFhMmEtYjVjZjMwOTNkOThjXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        genres: ["Mystery", "Psychological", "Supernatural"],
        quote: "If you could change the past, what would you do differently?",
        mood: "Reflective",
        synopsis:
          "A man with the ability to travel back in time tries to prevent a series of murders from his childhood.",
        status: "Completed",
        episodes: 12,
        trailerUrl: "https://www.youtube.com/watch?v=YJm7Y7JMK1c",
      },
      {
        title: "A Silent Voice",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzQ2YTM2NmYtZjEzMS00M2NiLWI3NjQtNjIyMDEzMmQ1ZDkxXkEyXkFqcGc@.V1.jpg",
        genres: ["Drama", "Slice of Life"],
        quote: "No matter what happens tomorrow, I'm glad I met you today.",
        mood: "Poignant",
        synopsis:
          "A former bully seeks redemption by reconnecting with the deaf girl he tormented in elementary school.",
        status: "Movie",
        episodes: 1,
        trailerUrl: "https://www.youtube.com/watch?v=nfK6UgLra7g",
      },
      {
        title: "Natsume's Book of Friends",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/88/Natsume%27s_Book_of_Friends_1.png",
        genres: ["Slice of Life", "Supernatural"],
        quote: "Even if you're alone, you're not really alone.",
        mood: "Comforting",
        synopsis:
          "A boy who can see spirits inherits a book that binds spirits to his grandmother's will and decides to free them.",
        status: "Completed",
        episodes: 74,
        trailerUrl: "https://www.youtube.com/watch?v=G6Y3flnD2tI",
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
    summer: { image: "/Images/summer-footer.png" },
    winter: { image: "/Images/winter-footer.png" },
    autumn: {
      image:
        "/Images/png-autumn-tree-shedding-leaves-gracefully_53876-455344 (3).png",
    },
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
