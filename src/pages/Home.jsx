import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection.jsx";
import Research from "../components/Research.jsx";
import Publications from "../components/Publications.jsx";
import BeamlineSummary from "../components/BeamlineSummary.jsx";
import Talks from "../components/Talks.jsx";
import Awards from "../components/Awards.jsx";
import Gallery from "../components/Gallery.jsx";
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
      <Publications />
      <BeamlineSummary />
      <Talks />
      <Awards />
      <Gallery />
    </motion.div>
  );
}
