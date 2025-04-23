"use client";
import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SEASONS = {
  winter: {
    name: 'Winter',
    particleType: 'snowflake',
    icon: '❄️',
    bgGradient: 'bg-gradient-to-br from-[#c8b6ff] to-[#b8c0ff]',
    description: 'where every story falls as gently as fresh snow',
    accentColor: 'border-[#9381ff]',
    textColor: 'text-[#2b2d42]',
    bgColor: 'bg-[#f8f9fa]',
  },
  spring: {
    name: 'Spring',
    particleType: 'raindrop',
    icon: '🌸',
    bgGradient: 'bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]',
    description: 'where every story blossoms like cherry blossoms',
    accentColor: 'border-[#45b29a]',
    textColor: 'text-[#2b423d]',
    bgColor: 'bg-[#f8fff9]',
  },
  summer: {
    name: 'Summer',
    particleType: 'sunbeam',
    icon: '☀️',
    bgGradient: 'bg-gradient-to-br from-[#ff9a76] to-[#ffd6a5]',
    description: 'where every story shines bright like the summer sun',
    accentColor: 'border-[#ff6b35]',
    textColor: 'text-[#422b2b]',
    bgColor: 'bg-[#fff9f8]',
  },
  autumn: {
    name: 'Autumn',
    particleType: 'leaf',
    icon: '🍂',
    bgGradient: 'bg-gradient-to-br from-[#ff8c42] to-[#ffb347]',
    description: 'where every story drifts like falling leaves',
    accentColor: 'border-[#e2711d]',
    textColor: 'text-[#42352b]',
    bgColor: 'bg-[#fff8f0]',
  },
};

const PARTICLE_CONFIG = {
  snowflake: { count: 50, minSize: 2, maxSize: 6, minDuration: 5, maxDuration: 15 },
  leaf: { count: 30, minSize: 10, maxSize: 30, minDuration: 10, maxDuration: 25 },
  raindrop: { count: 100, minDuration: 0.5, maxDuration: 1.5 },
  sunbeam: { count: 10, minSize: 50, maxSize: 150, minDuration: 10, maxDuration: 30 },
};

const Jagjeet = () => {
  const [currentSeason, setCurrentSeason] = useState('winter');
  const [particles, setParticles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createParticles = useCallback(() => {
    const { particleType } = SEASONS[currentSeason];
    const config = PARTICLE_CONFIG[particleType];
    
    const newParticles = Array.from({ length: config.count }, (_, i) => {
      const baseParticle = {
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * (config.maxDuration - config.minDuration) + config.minDuration,
        delay: Math.random() * 5,
      };

      switch (particleType) {
        case 'snowflake':
          return {
            ...baseParticle,
            size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
          };
        case 'leaf':
          return {
            ...baseParticle,
            size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
            rotation: Math.random() * 360,
            emoji: '🍂',
          };
        case 'raindrop':
          return baseParticle;
        case 'sunbeam':
          return {
            ...baseParticle,
            size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
          };
        default:
          return baseParticle;
      }
    });

    setParticles(newParticles);
  }, [currentSeason]);

  useEffect(() => {
    createParticles();
    return () => setParticles([]);
  }, [createParticles]);

  const renderParticles = () => {
    const { particleType } = SEASONS[currentSeason];
    
    return particles.map((particle) => {
      const commonStyles = {
        left: `${particle.left}vw`,
        animation: `fall ${particle.duration}s linear ${particle.delay}s infinite`,
      };

      switch (particleType) {
        case 'snowflake':
          return (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white opacity-80 filter drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]"
              style={{
                ...commonStyles,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            />
          );
        case 'leaf':
          return (
            <div
              key={particle.id}
              className="absolute opacity-80 text-[1.5rem] flex justify-center items-center"
              style={{
                ...commonStyles,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                transform: `rotate(${particle.rotation}deg)`,
              }}
            >
              {particle.emoji}
            </div>
          );
        case 'raindrop':
          return (
            <div
              key={particle.id}
              className="absolute w-[2px] h-[15px] bg-gradient-to-b from-transparent to-white"
              style={commonStyles}
            />
          );
        case 'sunbeam':
          return (
            <div
              key={particle.id}
              className="absolute opacity-30 rounded-full bg-[radial-gradient(circle,_white,_transparent_70%)]"
              style={{
                ...commonStyles,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            />
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className={`min-h-screen ${SEASONS[currentSeason].bgColor} text-${SEASONS[currentSeason].textColor} overflow-x-hidden relative font-['Poppins'] leading-6`}>
      <Head>
        <title>Anime Seasons - {SEASONS[currentSeason].name}</title>
        <meta name="description" content={`Explore ${SEASONS[currentSeason].name} anime recommendations`} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

    

      

      {/* Hero Section */}
      <main className=" relative z-[2]">
        <section 
          className={`min-h-screen flex flex-col justify-center items-center text-center py-8 px-[5%] relative overflow-hidden ${SEASONS[currentSeason].bgGradient}`}
          aria-labelledby="season-heading"
        >
          <div className="relative z-[2] p-8 rounded-xl flex flex-col items-center gap-6">
            <h1 id="season-heading" className="text-[clamp(2rem,5vw,3.5rem)] mb-2 font-bold leading-[1.2] text-gray-800 text-shadow-[1px_1px_2px_rgba(0,0,0,0.05)]">
              Anime Through the Seasons
            </h1>
            <p className="text-md text-gray-800/80 font-light leading-[1.6] max-w-[700px] mx-auto italic">
              Experience the magic of anime in {SEASONS[currentSeason].name.toLowerCase()} -{' '}
              {SEASONS[currentSeason].description}.
            </p>
            
            {/* Season Selector */}
            <div className="flex flex-wrap justify-center gap-3 my-4">
              {Object.keys(SEASONS).map((season) => (
                <button
                  key={season}
                  className={`px-4 py-2 rounded-full bg-white/70 border-2 ${currentSeason === season ? 'border-' + SEASONS[season].accentColor + ' bg-white/90 font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.15)]' : 'border-transparent'} cursor-pointer transition-all duration-300 ease-in-out font-['Poppins'] font-medium text-[0.9rem] flex items-center gap-2 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)]`}
                  onClick={() => setCurrentSeason(season)}
                  aria-label={`Switch to ${SEASONS[season].name} season`}
                >
                  {SEASONS[season].icon} {SEASONS[season].name}
                </button>
              ))}
            </div>

           
          </div>
          <div className="absolute bottom-8 flex flex-col items-center text-gray-800 font-medium animate-bounce z-[2]">
            Scroll to explore
            <i className="fas fa-chevron-down mt-2 text-[1.25rem] animate-pulse" aria-hidden="true"></i>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Jagjeet;