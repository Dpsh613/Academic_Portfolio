import React from "react";
import { motion } from "framer-motion";
import { beamlineData } from "../constants/beamlineData";
import BeamlineHero from "../components/features/beamline/BeamlineHero";
import FacilitySection from "../components/features/beamline/FacilitySection";
import pageTransition from "../animation/pageTransition";

export default function BeamlinePage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative"
    >
      <BeamlineHero />

      {/* Facilities mapped using standard layout */}
      <div className="pb-12">
        {beamlineData.map((facility, fIdx) => (
          <FacilitySection key={facility.id || fIdx} facility={facility} />
        ))}
      </div>
    </motion.div>
  );
}
