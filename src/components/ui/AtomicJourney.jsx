import React from "react";
import { motion } from "framer-motion";
import { pubData } from "../../constants/publicationsData"; // adjust path as needed

const AtomicJourney = () => {
  // 1. Get unique years and sort oldest to newest
  const years = [...new Set(pubData.map((p) => p.year))].sort((a, b) => a - b);

  // 2. Setup dynamic scaling
  const minRadius = 60;
  const maxRadius = 140;
  const getRadius = (index) => {
    if (years.length === 1) return (minRadius + maxRadius) / 2;
    return minRadius + index * ((maxRadius - minRadius) / (years.length - 1));
  };

  // 3. Helper to calculate exact angle based on the specific Date
  const getAngle = (dateStr, year) => {
    const date = new Date(dateStr);
    const start = new Date(year, 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return (dayOfYear / 365) * 360;
  };

  return (
    <div className="relative w-[350px] h-[350px] flex items-center justify-center">
      {/* --- CENTRAL CORE (Nucleus) --- */}
      <div className="absolute z-30 flex items-center justify-center">
        {/* Outer subtle pulse */}
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute w-8 h-8 bg-theme-accent rounded-full blur-md"
        />
        {/* Inner solid core */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative w-3 h-3 bg-theme-accent rounded-full shadow-[0_0_15px_rgba(250,250,51,1)]"
        />
      </div>

      {/* --- ORBITAL RINGS & NODES --- */}
      {years.map((year, index) => {
        const radius = getRadius(index);
        const papersThisYear = pubData.filter((p) => p.year === year);
        const ringDuration = 40 + index * 15; // Outer rings spin slower

        return (
          <div key={year} className="absolute flex items-center justify-center">
            {/* 1. THE STATIC RING & YEAR LABEL (Does NOT spin) */}
            <div
              className="absolute rounded-full border border-theme-neutral-muted/30 border-dashed z-10"
              style={{ width: radius * 2, height: radius * 2 }}
            >
              {/* Clean, background-less text positioned just inside the top rim */}
              <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] text-theme-neutral-light/70 font-mono tracking-widest">
                {year}
              </span>
            </div>

            {/* 2. THE SPINNING CONTAINER (Holds the publication dots) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: ringDuration,
                ease: "linear",
              }}
              className="absolute z-20 flex items-center justify-center"
              style={{ width: radius * 2, height: radius * 2 }}
            >
              {papersThisYear.map((pub) => {
                const angle = getAngle(pub.date, year);

                return (
                  <div
                    key={pub.id}
                    className="absolute left-1/2 top-1/2 pointer-events-auto"
                    style={{
                      // Positions the dot exactly on the ring based on its date
                      transform: `rotate(${angle}deg) translateX(${radius}px)`,
                    }}
                  >
                    {/* 
                      Counter-rotation: Because the parent spins forward, 
                      this spins backwards so the tooltip stays perfectly upright!
                    */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: ringDuration,
                        ease: "linear",
                      }}
                      className="relative flex items-center justify-center group"
                    >
                      {/* The Publication Dot */}
                      <div className="w-2.5 h-2.5 bg-theme-accent rounded-full shadow-[0_0_8px_rgba(250,250,51,0.8)] cursor-pointer group-hover:scale-150 group-hover:bg-white transition-all duration-300" />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default AtomicJourney;
