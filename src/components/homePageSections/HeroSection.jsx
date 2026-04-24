import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import staggerContainer from "../../animation/staggerContainer";
import { HeroPrimary } from "../ui/Button";
import HeroImage from "../ui/HeroImage";
import { pubData } from "../../constants/publicationsData";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center bg-[url('./assets/images/img1.jpg')] bg-cover bg-center overflow-hidden"
    >
      {/* Background Overlay - Darkened slightly for better contrast */}
      <div className="absolute inset-0 bg-theme-black/90 z-0" />

      {/* Content Container - Exactly matched to Beamline Page Spacing */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 relative z-10 w-full">
        {/* Adjusted gap so left/right elements sit nicely together */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUpVariant}
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <span className="w-8 h-px bg-theme-accent"></span>
              <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold">
                Doctoral Researcher
              </span>
            </motion.div>

            {/* Now relying entirely on the globally scaled index.css variables */}
            <motion.h1 variants={fadeUpVariant} className="leading-tight">
              Arnab Kanti{" "}
              <span className="font-semibold text-secondary transition-all duration-300 hover:bg-text-secondary-hover">
                Jana
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="mt-6 max-w-xl text-theme-neutral-light border-l-4 border-theme-accent pl-4 md:pl-6"
            >
              My experimental approach is designed to bridge the gap between
              macroscopic phenomena and their microscopic origins. To address
              fundamental questions in magnetism, I integrate lab-based
              synthesis and characterization, from XRD and magnetometry to
              spectroscopy, with advanced probes such as neutron, muon, and
              synchrotron facilities. To build a cohesive understanding from the
              bulk material down to the atomic scale.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-6 md:gap-10 mt-8 text-theme-neutral-light uppercase tracking-wider border-b border-theme-neutral-muted pb-6 w-full"
            >
              <div className="flex-1 min-w-[100px]">
                <h3 className="text-secondary font-mono">14</h3>
                <h4 className="text-theme-neutral-light text-xs mt-1">
                  Accepted Proposals
                </h4>
              </div>
              <div className="flex-1 min-w-[100px]">
                <h3 className="text-secondary font-mono">35+</h3>
                <h4 className="text-theme-neutral-light text-xs mt-1">
                  Allocated Beam Days
                </h4>
              </div>
              <div className="flex-1 min-w-[100px]">
                <h3 className="text-secondary font-mono">
                  {pubData?.length || 0}
                </h3>
                <h4 className="text-theme-neutral-light text-xs mt-1">
                  Publications
                </h4>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="pt-6">
              <HeroPrimary to="/beamline">All Publications</HeroPrimary>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image component (Now naturally takes up the remaining 5 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
