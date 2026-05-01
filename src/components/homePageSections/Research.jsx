import React from "react";
import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant.js";
import staggerContainer from "../../animation/staggerContainer.js";
import { researchData } from "../../constants/researchData.jsx";

// Import all your data directly from the Expertise Data file
import {
  SYNTHESIS_DATA,
  STRUCTURAL_ANALYSIS_DATA,
  MAGNETOMETRY_DATA,
  SPECTROSCOPY_DATA,
  MICROSCOPIC_PROBES_DATA,
  SOFTWARES_DATA,
} from "../../constants/expertiesData";

const Research = () => {
  // 1. DYNAMICALLY GENERATE SUMMARY DATA
  // This automatically extracts the "title" (or "name") from each data file
  // joins them with a comma, and adds a period at the end.
  const dynamicExpertiseData = [
    {
      category: "Synthesis",
      skills: SYNTHESIS_DATA.map((item) => item.title).join(", ") + ".",
    },
    {
      category: "Structural Analysis",
      skills:
        STRUCTURAL_ANALYSIS_DATA.map((item) => item.title).join(", ") + ".",
    },
    {
      category: "Magnetometry & Transport",
      skills: MAGNETOMETRY_DATA.map((item) => item.title).join(", ") + ".",
    },
    {
      category: "Spectroscopy",
      skills: SPECTROSCOPY_DATA.map((item) => item.title).join(", ") + ".",
    },
    {
      category: "Microscopic Local Probes",
      skills:
        MICROSCOPIC_PROBES_DATA.map((item) => item.title).join(", ") + ".",
    },
    {
      category: "Software",
      skills: SOFTWARES_DATA.map((item) => item.name).join(", ") + ".",
    },
  ];

  return (
    <section
      id="research"
      className="relative w-full py-10 px-8 md:px-16 bg-theme-black"
    >
      {/* ---------------- RESEARCH FOCUS SECTION ---------------- */}
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <h2 className="text-theme-heading">Present Research focus</h2>
          <div className="w-24 h-0.5 bg-theme-accent mt-6"></div>
        </motion.div>

        {/* ONE BIG CONTAINER - VERTICAL LIST */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto w-full border border-theme-accent-light p-6 sm:p-8 md:p-12 backdrop-blur-sm shadow-xl"
        >
          <div className="flex flex-col divide-y divide-zinc-800/60">
            {researchData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUpVariant}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 first:pt-0 last:pb-0 items-center"
              >
                {/* Left Side: Number, Heading & Description */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="font-mono text-secondary font-fluid-2 font-light mb-2 block">
                    {item.id}.
                  </span>
                  <h3 className="text-secondary text-xl md:text-2xl font-medium tracking-wide mb-6">
                    {item.title}
                  </h3>
                  <p className="text-theme-neutral-light leading-relaxed m-0 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>

                {/* Right Side: Image Component (Uncropped) */}
                <div className="lg:col-span-5 w-full">
                  <div className="w-full p-2 group overflow-hidden flex justify-center items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full max-h-[350px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ---------------- DYNAMIC EXPERTISE SECTION ---------------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-7xl mx-auto mt-24"
      >
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-theme-heading font-light tracking-tight">
            Hands-on Expertise
          </h2>
          <div className="flex-grow h-px bg-theme-neutral-muted/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dynamicExpertiseData.map((item, index) => (
            <motion.div
              variants={fadeUpVariant}
              key={index}
              className="p-8 border border-theme-neutral-muted/20 bg-theme-neutral-dark/10 hover:bg-theme-neutral-dark/30 hover:border-theme-accent/50 transition-all duration-300 rounded-sm group relative overflow-hidden"
            >
              {/* Top accent line animation on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-theme-accent transition-all duration-500 group-hover:w-full"></div>

              <h4 className="tracking-[0.1em] text-secondary font-medium mb-4 uppercase text-sm">
                {item.category}
              </h4>
              <p className="text-sm text-theme-neutral-light font-light leading-relaxed">
                {item.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Research;
