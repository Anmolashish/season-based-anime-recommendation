"use client";
import { useState, useEffect, useRef } from "react";

export default function AnimeGallery({ anime, activeSeason, season }) {
  const rowRefs = useRef([]);
  const animationId = useRef(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchScrollLeft, setTouchScrollLeft] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredAnime = anime.filter((item) => item.season === season);

  // Create duplicated rows for seamless looping
  const rows = [];
  const itemsPerRow = Math.max(
    isMobile ? 4 : 8,
    Math.ceil(filteredAnime.length / (isMobile ? 2 : 4))
  );
  
  for (let i = 0; i < (isMobile ? 2 : 4); i++) {
    const rowItems = filteredAnime.slice(
      i * itemsPerRow,
      (i + 1) * itemsPerRow
    );
    rows.push([...rowItems, ...rowItems, ...rowItems]); // Triple the items for smoother looping
  }

  const animate = () => {
    rowRefs.current.forEach((row, index) => {
      if (row && hoveredRow !== index) {
        const direction = index % 2 === 0 ? -1 : 1;
        const speed = 2/ 2;
        row.scrollLeft += speed * direction;

        // Reset scroll position when reaching the end for seamless looping
        if (row.scrollLeft >= (row.scrollWidth / 3) * 2) {
          row.scrollLeft -= row.scrollWidth / 3;
        } else if (row.scrollLeft <= 0) {
          row.scrollLeft += row.scrollWidth / 3;
        }
      }
    });
    animationId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isMobile) return; // Don't auto-scroll on mobile
    animationId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId.current);
  }, [hoveredRow, filteredAnime, isMobile]);

  // Mobile touch handlers
  const handleTouchStart = (e, rowIndex) => {
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
    setTouchScrollLeft(rowRefs.current[rowIndex].scrollLeft);
    cancelAnimationFrame(animationId.current);
  };

  const handleTouchMove = (e, rowIndex) => {
    if (!rowRefs.current[rowIndex]) return;
    const touch = e.touches[0];
    const x = touch.clientX;
    const walk = (x - touchStartX) * 2; // Scroll-fast
    rowRefs.current[rowIndex].scrollLeft = touchScrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!isMobile) {
      animationId.current = requestAnimationFrame(animate);
    }
  };

  return (
    <div className="w-full overflow-hidden space-y-3 py-6">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => (rowRefs.current[rowIndex] = el)}
          className={`flex overflow-x-hidden scrollbar-hide w-[calc(100%+8px)] ${
            isMobile ? "snap-x snap-mandatory" : ""
          }`}
          onMouseEnter={() => !isMobile && setHoveredRow(rowIndex)}
          onMouseLeave={() => !isMobile && setHoveredRow(null)}
          onTouchStart={(e) => isMobile && handleTouchStart(e, rowIndex)}
          onTouchMove={(e) => isMobile && handleTouchMove(e, rowIndex)}
          onTouchEnd={handleTouchEnd}
        >
          {row.map((anime, index) => (
            <div
              key={`${rowIndex}-${index}`}
              className={`flex-shrink-0 ${
                isMobile 
                  ? "w-[45vw] min-w-[45vw] h-[25vw] snap-center" 
                  : "w-[22vw] min-w-[22vw] h-[12.5vw]"
              } mx-2 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 z-20`}
              style={{ pointerEvents: isMobile ? "auto" : "none" }}
            >
              <div className="w-full h-0 pb-[56.25%] relative">
                <img
                  src={anime.image}
                  alt={anime.title || "Anime image"}
                  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                  draggable="false"
                />
                {isMobile && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                    <span className="text-white text-sm font-bold px-2 text-center">
                      {anime.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}