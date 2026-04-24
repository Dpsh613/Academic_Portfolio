import { motion } from "framer-motion";
import HeroSection from "../components/homePageSections/HeroSection.jsx";
import Research from "../components/homePageSections/Research.jsx";
import PublicationsSummary from "../components/homePageSections/PublicationsSummary.jsx";
import BeamlineSummary from "../components/homePageSections/BeamlineSummary.jsx";
import Talks from "../components/homePageSections/Talks.jsx";
import Awards from "../components/homePageSections/Awards.jsx";
import Gallery from "../components/homePageSections/Gallery.jsx";
// animation
import pageTransition from "../animation/pageTransition.js";

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <Research />
      <PublicationsSummary />
      <BeamlineSummary />
      <Talks />
      <Awards />
      <Gallery />
    </motion.div>
  );
}
