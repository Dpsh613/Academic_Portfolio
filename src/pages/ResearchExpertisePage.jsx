import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../animation/pageTransition";
import { methodologiesData } from "../constants/researchExpertiesData";
// Layout Components
import SectionWrapper from "../components/Layout/SectionWrapper";

// Feature Components
import ResearchHero from "../components/features/researchexpertise/ResearchHero";
import MethodologyGrid from "../components/features/researchexpertise/MethodologyGrid";
import MicroscopicProbes from "../components/features/researchexpertise/MicroscopicProbes";
import SoftwareGrid from "../components/features/researchexpertise/SoftwareGrid";

const ResearchExpertisePage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative overflow-hidden"
    >
      {/* 1. HERO SECTION */}
      <ResearchHero />
      {/* 2. MAIN CONTENT WRAPPER */}
      <SectionWrapper className="pb-24 md:pb-32">
        <div className="space-y-24 md:space-y-32">
          {/* Standard Grids */}
          <MethodologyGrid
            title="Synthesis"
            data={methodologiesData.synthesis}
          />
          <MethodologyGrid
            title="Structural Analysis"
            data={methodologiesData.structuralAnalysis}
          />
          <MethodologyGrid
            title="Magnetometry & Transport"
            data={methodologiesData.magnetometry}
          />
          <MethodologyGrid
            title="Spectroscopy"
            data={methodologiesData.spectroscopy}
          />

          {/* Complex Sections */}
          <MicroscopicProbes data={methodologiesData.microscopicProbes} />

          <SoftwareGrid data={methodologiesData.softwares} />
        </div>
      </SectionWrapper>
    </motion.section>
  );
};

export default ResearchExpertisePage;
