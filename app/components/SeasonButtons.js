'use client';

export default function SeasonButtons({ activeSeason, setActiveSeason }) {
  const seasons = [
    { id: 'all', name: 'All Seasons', text: 'text-white', border: 'border-white/50' },
    { id: 'rainy', name: 'Rainy', text: 'text-blue-300', border: 'border-blue-400/50' },
    { id: 'summer', name: 'Summer', text: 'text-green-300', border: 'border-green-400/50' },
    { id: 'autumn', name: 'Autumn', text: 'text-amber-300', border: 'border-amber-400/50' },
    { id: 'winter', name: 'Winter', text: 'text-blue-200', border: 'border-blue-300/50' }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {seasons.map(season => (
        <button
          key={season.id}
          onClick={() => setActiveSeason(season.id)}
          className={`${season.text} px-5 py-2 rounded-full font-medium transition-all border ${season.border} ${
            activeSeason === season.id 
              ? 'bg-white/10 scale-105' 
              : 'bg-transparent hover:bg-white/5 hover:scale-105'
          }`}
        >
          {season.name}
        </button>
      ))}
    </div>
  );
}