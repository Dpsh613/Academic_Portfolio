import React from "react";
import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import { COLLABORATORS } from "../constants/collaborators";
import { Globe2, MapPin, User2 } from "lucide-react";

// --- DATA FILTERING ---
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
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 bg-[url('./assets/images/img3.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-theme-black/90 z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7"
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
                className="mb-4 leading-tight"
              >
                Global & National <br />
                <span className="text-secondary font-bold">Collaborators</span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-8 text-theme-neutral-light max-w-2xl border-l-2 border-theme-neutral-dark pl-4"
              >
                Advancing the frontiers of condensed matter physics through
                shared expertise, large-scale facilities, and cross-border
                research initiatives with incredible minds.
              </motion.p>
            </motion.div>

            {/* Right Content: Animated Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative h-[400px]"
            >
              {/* Central Glowing Globe */}
              <div className="absolute z-10 bg-theme-neutral-dark/80 p-6 rounded-full border border-theme-accent/30 shadow-[0_0_30px_rgba(250,250,51,0.15)] backdrop-blur-md">
                <Globe2 className="w-16 h-16 text-theme-accent" />
              </div>

              {/* Orbital Ring 1 (Dashed, rotating clockwise) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border-[1px] border-theme-accent/20 rounded-full border-dashed"
              />

              {/* Orbital Ring 2 (Solid, rotating counter-clockwise) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-20 border-[1px] border-theme-neutral-muted/30 rounded-full"
              >
                {/* Floating Nodes on Ring 2 */}
                <div className="absolute top-[-5px] left-1/2 w-2.5 h-2.5 bg-theme-accent rounded-full shadow-[0_0_10px_rgba(250,250,51,0.8)]" />
                <div className="absolute bottom-[-5px] left-1/4 w-2 h-2 bg-theme-neutral-light rounded-full" />
              </motion.div>

              {/* Orbital Ring 3 (Outer faint ring) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-theme-neutral-dark rounded-full"
              >
                <div className="absolute top-1/4 right-[-4px] w-2 h-2 bg-theme-accent/50 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- 2. COLLABORATORS LIST SECTIONS --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 pb-32">
        {/* === NATIONAL COLLABORATIONS === */}
        {nationalCollaborators.length > 0 && (
          <div className="mb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="flex items-center gap-6 mb-12"
            >
              <h2 className="text-3xl md:text-4xl flex items-center gap-4 text-theme-heading">
                <MapPin className="w-8 h-8 text-theme-accent" />
                National{" "}
                <span className="text-secondary font-bold">Collaborators</span>
              </h2>
              <div className="h-px bg-theme-neutral-dark flex-grow"></div>
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
              className="flex items-center gap-6 mb-12"
            >
              <h2 className="text-3xl md:text-4xl flex items-center gap-4 text-theme-heading">
                <Globe2 className="w-8 h-8 text-theme-accent" />
                International{" "}
                <span className="text-secondary font-bold">Collaborators</span>
              </h2>
              <div className="h-px bg-theme-neutral-dark flex-grow"></div>
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

// --- REUSABLE COLLABORATOR CARD COMPONENT ---
const CollaboratorCard = ({ person }) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      className="bg-theme-neutral-dark/20 border border-theme-neutral-muted/30 p-6 rounded-sm hover:border-theme-accent/50 hover:bg-theme-neutral-dark/40 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-theme-accent opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" />

      {/* Person Info */}
      <div className="flex items-start gap-4 mb-8 flex-grow relative z-10">
        <div className="bg-theme-black border border-theme-neutral-muted/50 p-2 rounded-full shrink-0 group-hover:border-theme-accent/50 transition-colors">
          <User2 className="w-5 h-5 text-theme-neutral-light group-hover:text-theme-accent transition-colors" />
        </div>
        <h3 className="text-xl text-theme-heading font-heading leading-tight pt-1">
          {person.name}
        </h3>
      </div>

      {/* Logos Area (Bottom) - No Text, Just Logos */}
      <div className="border-t border-theme-neutral-dark pt-5 flex flex-wrap items-center gap-6 relative z-10">
        {person.institutes.map((inst, idx) => (
          <div key={idx} className="h-10 flex items-center justify-center">
            <img
              src={inst.logo}
              alt="Institute Logo"
              className="max-h-full max-w-[120px] object-contain"
              onError={(e) => {
                // Fallback if image path is broken
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
