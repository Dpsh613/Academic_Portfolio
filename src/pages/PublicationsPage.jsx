import React, { useMemo } from "react";
import { motion } from "framer-motion";
import pageTransition from "../animation/pageTransition";
import { pubData, heroData } from "../constants/publicationsData";

// Components
import PageHero from "../components/Layout/PageHero";
import SectionWrapper from "../components/Layout/SectionWrapper";
import PublicationHero from "../components/features/publications/PublicationHero";
import PublicationYearGroup from "../components/features/publications/PublicationYearGroup";
import AtomicJourney from "../components/ui/AtomicJourney";

const PublicationsPage = () => {
  const { groupedPublications, sortedYears } = useMemo(() => {
    const grouped = pubData.reduce((acc, pub) => {
      if (!acc[pub.year]) acc[pub.year] = [];
      acc[pub.year].push(pub);
      return acc;
    }, {});

    // Sort years descending (Newest first)
    const sorted = Object.keys(grouped).sort((a, b) => b - a);
    return { groupedPublications: grouped, sortedYears: sorted };
  }, []);

  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative"
    >
      {/* 1. Hero Section */}
      <PublicationHero />

      {/* 2. Dynamic Publications List */}
      <SectionWrapper className="pb-32">
        {sortedYears.map((year) => (
          <PublicationYearGroup
            key={year}
            year={year}
            publications={groupedPublications[year]}
          />
        ))}
      </SectionWrapper>
    </motion.section>
  );
};

export default PublicationsPage;
