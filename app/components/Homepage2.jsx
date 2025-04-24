'use client';
import { useState, useEffect } from 'react';
import { allAnime } from '../data/animeData';
import SeasonButtons from './SeasonButtons';
import AnimeGallery from './AnimeGallery';

const Homepage2 = (props) => {
  const [activeSeason, setActiveSeason] = useState('all');
  const [navBorderClass, setNavBorderClass] = useState('border-white/10');

  useEffect(() => {
    switch(activeSeason) {
      case 'rainy':
        setNavBorderClass('border-blue-400/30');
        break;
      case 'summer':
        setNavBorderClass('border-green-400/30');
        break;
      case 'autumn':
        setNavBorderClass('border-amber-400/30');
        break;
      case 'winter':
        setNavBorderClass('border-blue-300/30');
        break;
      default:
        setNavBorderClass('border-white/10');
    }
  }, [activeSeason]);

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4">
        
        <AnimeGallery 
          anime={allAnime} 
          activeSeason={activeSeason} 
          season={props.season}
        />
        
        
      </div>
    </main>
  );
};

export default Homepage2;