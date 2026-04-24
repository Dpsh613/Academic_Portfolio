import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import staggerContainer from "../../animation/staggerContainer";
import { HeroPrimary } from "../ui/Button";
import HeroImage from "../ui/HeroImage";
// data
import { pubData } from "../../constants/publicationsData";
import { beamlineData } from "../../constants/beamlineData";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center bg-[url('./assets/images/img1.jpg')] bg-cover bg-center"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-theme-black/85 z-0 " />

      {/* Content Container */}
      <div className="container mx-auto px-6 mt-10 md:px-12 lg:px-16 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col justify-center gap-4 md:gap-6"
          >
            <motion.h1 variants={fadeUpVariant} className="leading-tight">
              Arnab Kanti{" "}
              <span className="font-semibold text-secondary transition-all duration-300 hover:bg-text-secondary-hover">
                Jana
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="font-bold text-fluid-p tracking-[0.2em] uppercase text-secondary"
            >
              Experimental Condensed Matter Physicist
            </motion.p>

            <motion.p
              variants={fadeUpVariant}
              className="max-w-xl text-theme-text border-l-4 border-theme-accent pl-4"
            >
              Specializing in magnetic frustration, quantum spin liquids, and
              superconductivity. Leveraging world-class neutron, muon, and
              synchrotron facilities across the globe.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-8 mt-4 text-theme-text uppercase tracking-wider border-b border-theme-neutral-muted pb-6 w-full sm:w-max"
            >
              <div>
                <h3 className="text-secondary font-mono">{pubData.length}</h3>
                <h4 className="text-theme-neutral-light">Publications</h4>
              </div>
              <div>
                <h3 className="text-secondary font-mono">
                  {beamlineData.length}
                </h3>
                <h4 className="text-theme-neutral-light">Global Facilities</h4>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="pt-4">
              <HeroPrimary to="/beamline">All Publications</HeroPrimary>
            </motion.div>
          </motion.div>
          {/* Importing Image Frame */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
