import React from "react";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

const ExpertiseGraphic = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-visible">
      {/* Central Pulsing Node (Core Material) */}
      <div className="absolute z-20 bg-theme-neutral-dark/90 p-4 md:p-5 rounded-lg border border-theme-accent/50 shadow-[0_0_40px_rgba(250,250,51,0.2)] backdrop-blur-md rotate-45">
        <Hexagon className="w-10 h-10 md:w-14 md:h-14 text-theme-accent -rotate-45" />
      </div>

      {/* Floating Orbital Node 1 (Top Right) */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[20%] z-10 bg-theme-neutral-dark/80 p-3 rounded-md border border-theme-neutral-muted/40 shadow-lg rotate-12"
      >
        <Hexagon className="w-6 h-6 text-theme-neutral-light/70" />
      </motion.div>

      {/* Floating Orbital Node 2 (Bottom Left) */}
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[20%] left-[15%] z-10 bg-theme-neutral-dark/80 p-2 rounded-md border border-theme-neutral-muted/40 shadow-lg -rotate-12"
      >
        <Hexagon className="w-5 h-5 text-theme-accent/70" />
      </motion.div>

      {/* Floating Orbital Node 3 (Bottom Right) */}
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-[10%] right-[30%] z-10"
      >
        <div className="w-2 h-2 bg-theme-accent rounded-full shadow-[0_0_10px_rgba(250,250,51,0.8)]" />
      </motion.div>

      {/* Connecting Lattice Lines (Using SVG) */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-40">
        {/* CHANGED: <motion.path> to <motion.line> to support percentages */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="25%"
          stroke="url(#accentGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* CHANGED: <motion.path> to <motion.line> to support percentages */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="25%"
          y2="75%"
          stroke="currentColor"
          className="text-theme-neutral-muted"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {/* Gradients */}
        <defs>
          <linearGradient
            id="accentGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(250,250,51,0)" />
            <stop offset="100%" stopColor="rgba(250,250,51,0.6)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Outer Rotating Ring (Simulating a Diffractometer or Beamline Chamber) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 md:inset-12 border-[1px] border-theme-neutral-muted/10 rounded-[50%]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 md:inset-20 border-[1px] border-theme-accent/10 rounded-[50%] border-dashed"
      />
    </div>
  );
};

export default ExpertiseGraphic;
