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
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-theme-black/90 z-0" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20 relative z-10 w-full">
        {/* FIXED GRID: 1 column on mobile -> 2 equal columns on tablet -> 12 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            // Tablet: takes 1 of 2 columns. Desktop: takes 7 of 12 columns.
            className="md:col-span-1 lg:col-span-7 flex flex-col justify-center"
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

            <motion.h1
              variants={fadeUpVariant}
              className="leading-tight text-4xl md:text-5xl lg:text-6xl"
            >
              Arnab Kanti{" "}
              <span className="font-semibold text-secondary transition-all duration-300 hover:bg-text-secondary-hover">
                Jana
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="mt-6 max-w-xl text-theme-neutral-light border-l-4 border-theme-accent pl-4 md:pl-6 text-sm md:text-base"
            >
              My experimental approach is designed to bridge the gap between
              macroscopic phenomena and their microscopic origins. To address
              fundamental questions in magnetism, I integrate lab-based
              synthesis and characterization, from XRD and magnetometry to
              spectroscopy, with advanced probes such as neutron, muon, and
              synchrotron facilities. To build a cohesive understanding from the
              bulk material down to the atomic scale.
            </motion.p>

            {/* Adjusted stats grid so it doesn't break on narrow tablet columns */}
            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-4 lg:gap-10 mt-8 text-theme-neutral-light uppercase tracking-wider border-b border-theme-neutral-muted pb-6 w-full"
            >
              <div>
                <h3 className="text-secondary font-mono text-xl md:text-2xl">
                  14
                </h3>
                <h4 className="text-theme-neutral-light text-xs mt-1">
                  Accepted Proposals
                </h4>
              </div>
              <div>
                <h3 className="text-secondary font-mono text-xl md:text-2xl">
                  35+
                </h3>
                <h4 className="text-theme-neutral-light text-xs mt-1">
                  Allocated Beam Days
                </h4>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-secondary font-mono text-xl md:text-2xl">
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

          {/* Right Column: Hero Image component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            // Tablet: takes 1 of 2 columns. Desktop: takes 5 of 12 columns.
            // md:justify-end ensures the image pushes to the right slightly on tablets so it doesn't crowd the text.
            className="md:col-span-1 lg:col-span-5 w-full flex justify-center md:justify-end lg:justify-center mt-12 md:mt-0"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
