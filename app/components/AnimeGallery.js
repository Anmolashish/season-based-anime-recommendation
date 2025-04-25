"use client";
import { useState, useEffect, useRef } from "react";

export default function AnimeGallery({ anime, activeSeason, season }) {
  const rowRefs = useRef([]);
  const animationId = useRef(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  const filteredAnime = anime.filter((item) => item.season === season);

  // Create duplicated rows for seamless looping
  const rows = [];
  const itemsPerRow = Math.max(8, Math.ceil(filteredAnime.length / 4));
  for (let i = 0; i < 4; i++) {
    const rowItems = filteredAnime.slice(
      i * itemsPerRow,
      (i + 1) * itemsPerRow
    );
    rows.push([...rowItems, ...rowItems, ...rowItems]); // Triple the items for smoother looping
  }

  useEffect(() => {
    const animate = () => {
      rowRefs.current.forEach((row, index) => {
        if (row && hoveredRow !== index) {
          const direction = index % 2 === 0 ? -1 : 1;
          const speed = 1 / 2;
          row.scrollLeft += speed * direction;

          // Reset scroll position when reaching the end for seamless looping
          if (row.scrollLeft >= (row.scrollWidth / 3) * 2) {
            row.scrollLeft -= row.scrollWidth / 2;
          } else if (row.scrollLeft <= 0) {
            row.scrollLeft += row.scrollWidth / 2;
          }
        }
      });
      animationId.current = requestAnimationFrame(animate);
    };

    animationId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId.current);
  }, [hoveredRow, filteredAnime]);

  return (
    <div className="w-full overflow-hidden space-y-3 py-6 ">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => (rowRefs.current[rowIndex] = el)}
          className="flex overflow-x-hidden scrollbar-hide w-[calc(100%+8px)] "
        >
          {row.map((anime, index) => (
            <div
              key={`${rowIndex}-${index}`}
              className="flex-shrink-0 w-[22vw] min-w-[22vw] h-[12.5vw] mx-2 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 z-20"
              style={{ pointerEvents: "none" }} // Make entire div non-interactive
            >
              <div className="w-full h-0 pb-[56.25%] relative">
                <img
                  src={anime.image}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                  draggable="false" // Prevent dragging
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
