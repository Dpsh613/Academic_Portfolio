import React from "react";
import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import AutoSciText from "../utils/AutoSciText";
import ExpertiseGraphic from "../components/ui/ExpertiseGraphic";
import { Play, ImageIcon, BarChart3 } from "lucide-react";

import {
  EXPERTISE_HERO,
  SYNTHESIS_DATA,
  STRUCTURAL_ANALYSIS_DATA,
  MAGNETOMETRY_DATA,
  SPECTROSCOPY_DATA,
  MICROSCOPIC_PROBES_DATA,
  SOFTWARES_DATA,
} from "../constants/expertiesData";

// Helper component for uniform section headings
const SectionHeader = ({ title }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUpVariant}
    className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16"
  >
    <h2 className="text-theme-heading">{title}</h2>
    <div className="h-px bg-theme-accent/30 flex-grow"></div>
  </motion.div>
);

// Helper component for Synthesis, Structural, and Magnetometry Layouts
const FeatureRow = ({ item }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUpVariant}
    className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
  >
    <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6 w-full">
      <h3 className="text-secondary text-2xl md:text-3xl font-light">
        <AutoSciText text={item.title} />
      </h3>
      <p className="text-theme-neutral-light leading-relaxed text-sm md:text-base md:text-justify m-0">
        <AutoSciText text={item.description} />
      </p>
    </div>
    <div className="lg:col-span-5 relative w-full">
      <div className="w-full rounded-sm p-4 flex items-center justify-center bg-theme-neutral-dark/20 border border-theme-neutral-muted/20">
        <img
          src={item.image}
          alt={item.title}
          className="w-full max-h-[220px] md:max-h-[280px] object-contain"
        />
      </div>
      <p className="text-center text-theme-neutral-muted tracking-tight leading-relaxed text-[11px] md:text-xs mt-4 px-2">
        <AutoSciText text={item.caption} />
      </p>
    </div>
  </motion.div>
);

const ExpertisePage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative overflow-hidden"
    >
      {/* --- 1. HERO SECTION -- */}
      <div className="relative w-full min-h-[90vh] md:min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[url('./assets/images/img9.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-theme-black/60 md:bg-theme-black/50 z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="md:col-span-6 lg:col-span-7"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-3 mb-4 md:mb-6"
              >
                <span className="w-6 md:w-8 h-px bg-theme-accent"></span>
                <span className="text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold font-mono">
                  Methodologies & Probes
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="leading-tight text-4xl md:text-5xl lg:text-6xl"
              >
                {EXPERTISE_HERO.title}{" "}
                <span className="font-semibold text-secondary transition-all duration-300 hover:bg-text-secondary-hover">
                  {EXPERTISE_HERO.highlight}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-6 max-w-xl text-theme-neutral-light border-l-4 border-theme-accent pl-4 md:pl-6 text-sm md:text-base"
              >
                {EXPERTISE_HERO.description}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="hidden md:flex md:col-span-6 lg:col-span-5 justify-center items-center scale-90 lg:scale-100"
            >
              <ExpertiseGraphic />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10 pb-24 md:pb-32 space-y-24 md:space-y-32">
        {/* SECTION: SYNTHESIS */}
        <div>
          <SectionHeader title="Synthesis" />
          <div className="space-y-16 md:space-y-24">
            {SYNTHESIS_DATA.map((item) => (
              <FeatureRow key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* SECTION: STRUCTURAL ANALYSIS */}
        <div>
          <SectionHeader title="Structural Analysis" />
          <div className="space-y-16 md:space-y-24">
            {STRUCTURAL_ANALYSIS_DATA.map((item) => (
              <FeatureRow key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* SECTION: MAGNETOMETRY & TRANSPORT */}
        <div>
          <SectionHeader title="Magnetometry & Transport" />
          <div className="space-y-16 md:space-y-24">
            {MAGNETOMETRY_DATA.map((item) => (
              <FeatureRow key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* SECTION: SPECTROSCOPY (Grid Layout) */}
        <div>
          <SectionHeader title="Spectroscopy" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16"
          >
            {SPECTROSCOPY_DATA.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUpVariant}
                className="flex flex-col group w-full h-full"
              >
                {/* 1. Text Content (Removed mt-auto to keep top borders aligned) */}
                <div className="flex flex-col gap-3 md:gap-4 border-t border-theme-neutral-muted/20 pt-4 md:pt-6">
                  <h3 className="text-theme-heading text-xl md:text-2xl font-light">
                    <AutoSciText text={item.title} />
                  </h3>
                  <p className="text-theme-neutral-light leading-relaxed text-sm md:text-base m-0 md:text-justify">
                    <AutoSciText text={item.description} />
                  </p>
                </div>

                {/* 2. Image Container (Added mt-auto here so images align perfectly regardless of text length) */}
                <div className="mt-auto mb-4 w-full rounded-sm p-4 md:p-6 flex items-center justify-center bg-theme-neutral-dark/20 border border-theme-neutral-muted/20 h-56 md:h-[300px] group-hover:border-theme-accent/50 group-hover:bg-theme-neutral-dark/40 transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 3. Caption */}
                <p className="text-center text-theme-neutral-muted tracking-tight leading-relaxed text-[11px] md:text-xs px-2 min-h-[3rem]">
                  <AutoSciText text={item.caption} />
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SECTION: MICROSCOPIC LOCAL PROBES */}
        <div>
          <SectionHeader title="Microscopic Local Probes" />
          <div className="space-y-20 md:space-y-32">
            {MICROSCOPIC_PROBES_DATA.map((probe) => {
              const mediaCount = probe.media.length;

              // FIXED LOGIC: Removed max-w constraints.
              // Now both 2-col and 3-col layouts will stretch to w-full perfectly.
              let gridColsClass = "lg:grid-cols-2";

              if (mediaCount === 3) {
                gridColsClass = "lg:grid-cols-3";
              }

              return (
                <motion.div
                  key={probe.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariant}
                  className="flex flex-col w-full"
                >
                  <div className="max-w-5xl mb-8 md:mb-12 w-full">
                    <h3 className="text-theme-heading text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6">
                      <AutoSciText text={probe.title} />
                    </h3>
                    <div className="bg-theme-neutral-dark/30 border-l-4 border-theme-accent p-5 md:p-8 rounded-r-sm mb-6 shadow-lg">
                      <span className="text-theme-accent text-[10px] md:text-[11px] font-bold uppercase tracking-widest block mb-2 md:mb-3">
                        Operating Principle
                      </span>
                      <p className="text-theme-neutral-light text-sm md:text-base leading-relaxed m-0 md:text-justify">
                        <AutoSciText text={probe.principle} />
                      </p>
                    </div>
                    <p className="text-theme-neutral-light leading-relaxed text-sm md:text-base lg:text-lg m-0">
                      <AutoSciText text={probe.description} />
                    </p>
                  </div>

                  {/* Grid is perfectly w-full without restrictive max widths */}
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-8 md:gap-12 w-full`}
                  >
                    {probe.media.map((mediaObj, idx) => (
                      <div key={idx} className="flex flex-col group w-full">
                        {/* Slightly increased lg:h-[350px] to beautifully fill the full width */}
                        <div className="relative w-full rounded-sm p-4 md:p-6 flex items-center justify-center bg-theme-neutral-dark/20 border border-theme-neutral-muted/20 h-56 md:h-[280px] lg:h-[350px] transition-all duration-300 group-hover:border-theme-accent/50 group-hover:bg-[#0a0a0a]">
                          {mediaObj.type === "video" ? (
                            <a
                              href={mediaObj.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative w-full h-full flex items-center justify-center cursor-pointer"
                            >
                              <img
                                src={mediaObj.url}
                                alt="Video Thumbnail"
                                className="w-full h-full object-contain opacity-50 group-hover:opacity-80 transition-opacity"
                              />
                              <div className="absolute inset-0 bg-theme-black/40 flex items-center justify-center group-hover:bg-transparent transition-all">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                                  <Play className="w-4 h-4 md:w-5 md:h-5 ml-1 fill-current" />
                                </div>
                              </div>
                            </a>
                          ) : (
                            <div className="relative w-full h-full flex items-center justify-center">
                              <img
                                src={mediaObj.url}
                                alt="Media"
                                className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                              />
                              <div className="absolute top-2 right-2 bg-theme-black/90 px-2 py-1 rounded text-[9px] md:text-[10px] font-mono text-theme-neutral-light border border-zinc-700 flex items-center gap-1.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {mediaObj.type === "graph" ? (
                                  <BarChart3 className="w-3 h-3 text-theme-accent" />
                                ) : (
                                  <ImageIcon className="w-3 h-3 text-theme-accent" />
                                )}
                                <span className="uppercase">
                                  {mediaObj.type}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                        <p className="text-center text-theme-neutral-muted tracking-tight leading-relaxed text-[11px] md:text-xs mt-3 md:mt-4 px-2">
                          <AutoSciText text={mediaObj.caption} />
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION: COMPUTATIONAL SOFTWARES */}
        <div className="pt-10 md:pt-16 border-t border-theme-neutral-muted/20">
          <SectionHeader title="Softwares" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mb-8 md:mb-12"
          >
            <p className="text-theme-neutral-light font-light max-w-3xl text-sm md:text-base lg:text-lg m-0">
              Proficiency in advanced data reduction, visualization, and
              theoretical modeling tools essential for modern experimental
              condensed matter physics.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {SOFTWARES_DATA.map((software, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                className="bg-theme-neutral-dark/20 border border-theme-neutral-muted/20 rounded-sm p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 md:gap-4 hover:border-theme-accent/50 hover:bg-[#0a0a0a] transition-all duration-300 group h-28 md:h-32 shadow-sm hover:shadow-[0_0_15px_rgba(250,250,51,0.1)]"
              >
                {software.logoUrl ? (
                  <img
                    src={software.logoUrl}
                    alt={`${software.name} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                ) : (
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-theme-neutral-muted/30 flex items-center justify-center bg-theme-black group-hover:border-theme-accent transition-colors duration-300">
                    <span className="text-theme-neutral-muted group-hover:text-theme-accent text-xs md:text-sm font-mono tracking-widest font-bold transition-colors duration-300">
                      {software.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                <span className="text-[10px] md:text-xs font-mono text-theme-neutral-light group-hover:text-theme-heading transition-colors tracking-wide">
                  {software.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExpertisePage;
