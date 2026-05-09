import { motion } from "framer-motion";
import HomeHero from "../components/features/home/HomeHero.jsx";
import ResearchExperties from "../components/features/home/ReseachExperties.jsx";
import Publication from "../components/features/home/Publication.jsx";
import Beamline from "../components/features/home/Beamline.jsx";
import Talks from "../components/features/home/Talks.jsx";
import Awards from "../components/features/home/Awards.jsx";
import Gallery from "../components/features/home/Gallery.jsx";
import pageTransition from "../animation/pageTransition.js";

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HomeHero />
      <ResearchExperties />
      <Publication />
      <Beamline />
      <Talks />
      <Awards />
      <Gallery />
    </motion.div>
  );
}
