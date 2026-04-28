import React from "react";
import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import { COLLABORATORS } from "../constants/collaborators";
import { Globe2, MapPin, User2 } from "lucide-react";
import GlobalNetwork from "../components/ui/GlobalNetwork"; // Imported our new component

const nationalCollaborators = COLLABORATORS.filter(
  (c) => c.region === "national",
);
const internationalCollaborators = COLLABORATORS.filter(
  (c) => c.region === "international",
);

const CollaboratorsPage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative"
    >
      {/* --- 1. HERO SECTION --- */}
      <div className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/images/img3.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-theme-black/90 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
          {/* Changed grid layout to support tablets (md:grid-cols-12) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="md:col-span-6 lg:col-span-7"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-px bg-theme-accent"></span>
                <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold font-mono">
                  Scientific Network
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="leading-tight text-4xl md:text-5xl lg:text-6xl"
              >
                Global & National <br />
                <span className="font-semibold text-secondary transition-all duration-300 hover:bg-text-secondary-hover">
                  Collaborators
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-6 max-w-xl text-theme-neutral-light border-l-4 border-theme-accent pl-4 md:pl-6 md:text-base"
              >
                Advancing the frontiers of condensed matter physics through
                shared expertise, large-scale facilities, and cross-border
                research initiatives with incredible minds.
              </motion.p>
            </motion.div>

            {/* Right Content: Animated Hero Graphic (Now visible on md/tablets) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="hidden md:flex md:col-span-6 lg:col-span-5 justify-center items-center"
            >
              <GlobalNetwork />
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- 2. COLLABORATORS LIST SECTIONS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20 relative z-10 pb-32">
        {/* === NATIONAL COLLABORATIONS === */}
        {nationalCollaborators.length > 0 && (
          <div className="mb-24 md:mb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="flex items-center gap-4 sm:gap-6 mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl flex items-center gap-3 md:gap-4 text-theme-heading">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-theme-accent shrink-0" />
                National{" "}
                <span className="text-secondary font-bold">Collaborators</span>
              </h2>
              <div className="h-px bg-theme-neutral-dark flex-grow hidden sm:block"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {nationalCollaborators.map((person) => (
                <CollaboratorCard key={person.id} person={person} />
              ))}
            </motion.div>
          </div>
        )}

        {/* === INTERNATIONAL COLLABORATIONS === */}
        {internationalCollaborators.length > 0 && (
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="flex items-center gap-4 sm:gap-6 mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl flex items-center gap-3 md:gap-4 text-theme-heading">
                <Globe2 className="w-6 h-6 sm:w-8 sm:h-8 text-theme-accent shrink-0" />
                International{" "}
                <span className="text-secondary font-bold">Collaborators</span>
              </h2>
              <div className="h-px bg-theme-neutral-dark flex-grow hidden sm:block"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {internationalCollaborators.map((person) => (
                <CollaboratorCard key={person.id} person={person} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default CollaboratorsPage;

// --- REUSABLE COLLABORATOR CARD COMPONENT (Mobile Fixed) ---
const CollaboratorCard = ({ person }) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      className="bg-theme-neutral-dark/20 border border-theme-neutral-muted/30 p-5 sm:p-6 rounded-sm hover:border-theme-accent/50 hover:bg-theme-neutral-dark/40 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
    >
      {/* Person Info */}
      <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 flex-grow relative z-10">
        {/* break-words ensures long names don't cause horizontal scrolling on mobile */}
        <h3 className="text-lg sm:text-xl text-theme-heading font-heading leading-tight pt-1 break-words">
          {person.name}
        </h3>
      </div>

      {/* Logos Area (Bottom) - Using flex-wrap so multiple logos stack on small screens */}
      <div className="border-t border-theme-accent/20 pt-4 sm:pt-5 flex flex-wrap items-center justify-start gap-4 sm:gap-6 relative z-10 min-h-[50px]">
        {person.institutes.map((inst, idx) => (
          <div
            key={idx}
            className="h-8 sm:h-10 flex items-center justify-center shrink-0"
          >
            <img
              src={inst.logo}
              alt="Institute Logo"
              className="max-h-full max-w-[100px] sm:max-w-[120px] object-contain"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/100x40/171717/525252?text=Logo";
              }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
