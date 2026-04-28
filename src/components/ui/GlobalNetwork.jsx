import React from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const GlobalNetwork = () => {
  return (
    // We use w-full so it dynamically stretches with the grid column,
    // creating that organic, non-circular elliptical shape you liked!
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-visible">
      {/* Central Glowing Globe */}
      <div className="absolute z-10 bg-theme-neutral-dark/80 p-5 md:p-6 rounded-full border border-theme-accent/30 shadow-[0_0_30px_rgba(250,250,51,0.15)] backdrop-blur-md">
        <Globe2 className="w-12 h-12 md:w-16 md:h-16 text-theme-accent" />
      </div>

      {/* Orbital Ring 1 (Dashed, rotating clockwise) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        // rounded-[50%] ensures it creates an oval/ellipse rather than a pill shape
        className="absolute inset-6 md:inset-10 border-[1px] border-theme-accent/20 rounded-[50%] border-dashed"
      />

      {/* Orbital Ring 2 (Solid, rotating counter-clockwise) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-12 md:inset-20 border-[1px] border-theme-neutral-muted/30 rounded-[50%]"
      >
        {/* Floating Nodes on Ring 2 */}
        <div className="absolute top-[10%] left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 bg-theme-accent rounded-full shadow-[0_0_10px_rgba(250,250,51,0.8)] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-[10%] left-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-theme-neutral-light rounded-full -translate-x-1/2 translate-y-1/2" />
      </motion.div>

      {/* Orbital Ring 3 (Outer faint ring) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 md:inset-0 border-[1px] border-theme-neutral-dark rounded-[50%]"
      >
        <div className="absolute top-1/4 right-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-theme-accent/50 rounded-full translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
};

export default GlobalNetwork;
