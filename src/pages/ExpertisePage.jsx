import React from "react";
import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import AutoSciText from "../utils/AutoSciText";
import ExpertiseGraphic from "../components/ui/ExpertiseGraphic";
import { Play, ImageIcon, BarChart3 } from "lucide-react";

import {
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
    <h2>{title}</h2>
    <div className="h-px bg-theme-accent/30 flex-grow"></div>
  </motion.div>
);

// Helper component: Renders items side-by-side as a card grid
const FeatureGridItem = ({ item }) => (
  <motion.div
    variants={fadeUpVariant}
    className="flex flex-col group w-full h-full"
  >
    {/* Text Section (Fixed: lg:min-h Ensures perfect horizontal image alignment) */}
    <div className="flex flex-col gap-3 md:gap-4 mb-4 lg:min-h-[140px]">
      <h3 className="text-secondary">
        <AutoSciText text={item.title} />
      </h3>
      <p className="text-theme-neutral-light leading-relaxed text-sm md:text-base m-0 md:text-justify">
        <AutoSciText text={item.description} />
      </p>
    </div>

    {/* Image Section (Fixed: removed mt-auto and changed invalid h-70 to h-64) */}
    <div className="w-full rounded-sm p-4 md:p-6 flex items-center justify-center h-64 md:h-[330px] transition-all duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Caption at the bottom (Fixed: moved mt-auto here to correctly push caption bottom) */}
    <div className="mt-auto pt-4">
      <p className="text-center text-theme-light tracking-tight leading-relaxed text-[11px] md:text-xs px-2">
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
      <div className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('./assets/images/img9.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-theme-black/90 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative z-20 md:col-span-6 lg:col-span-7"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-px bg-theme-accent"></span>
                <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold font-mono">
                  Methodologies & Probes
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="leading-tight text-4xl md:text-5xl lg:text-6xl text-white"
              >
                Research <br />
                <span className="font-semibold text-secondary transition-all duration-300 hover:bg-text-secondary-hover">
                  Expertise
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-6 max-w-xl text-theme-neutral-light border-l-4 border-theme-accent pl-4 md:pl-6 md:text-base"
              >
                Comprehensive methodologies spanning solid-state material
                synthesis, high-resolution structural analysis, thermodynamic
                measurements, and advanced microscopic local probes.
              </motion.p>
            </motion.div>

            {/* Right Content: Animated Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
              className="hidden md:flex md:col-span-6 lg:col-span-5 justify-center items-center relative z-20"
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16"
          >
            {SYNTHESIS_DATA.map((item) => (
              <FeatureGridItem key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

        {/* SECTION: STRUCTURAL ANALYSIS */}
        <div>
          <SectionHeader title="Structural Analysis" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16"
          >
            {STRUCTURAL_ANALYSIS_DATA.map((item) => (
              <FeatureGridItem key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

        {/* SECTION: MAGNETOMETRY & TRANSPORT */}
        <div>
          <SectionHeader title="Magnetometry & Transport" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16"
          >
            {MAGNETOMETRY_DATA.map((item) => (
              <FeatureGridItem key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

        {/* SECTION: SPECTROSCOPY */}
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
                <div className="flex flex-col gap-3 md:gap-4 mb-4 lg:min-h-[140px]">
                  <h3 className="text-secondary">
                    <AutoSciText text={item.title} />
                  </h3>
                  <p className="text-theme-neutral-light leading-relaxed text-sm md:text-base m-0 md:text-justify">
                    <AutoSciText text={item.description} />
                  </p>
                </div>

                <div className="w-full rounded-sm p-4 md:p-6 flex items-center justify-center h-64 md:h-[330px] transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="mt-auto pt-4">
                  <p className="text-center text-theme-neutral-light tracking-tight leading-relaxed text-[11px] md:text-xs px-2">
                    <AutoSciText text={item.caption} />
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SECTION: MICROSCOPIC LOCAL PROBES */}
        <div>
          <SectionHeader title="Microscopic Local Probes" />
          <div className="space-y-20 md:space-y-32">
            {MICROSCOPIC_PROBES_DATA.map((probe) => {
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
                    <h2 className="text-secondary mb-8">
                      <AutoSciText text={probe.title} />
                    </h2>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                    {probe.media.map((mediaObj, idx) => {
                      const isGraph = mediaObj.type === "graph";

                      return (
                        <div
                          key={idx}
                          className={`flex flex-col group w-full h-full ${
                            isGraph ? "md:col-span-2" : "col-span-1"
                          }`}
                        >
                          <div
                            className={`relative rounded-sm p-4 md:p-6 flex items-center justify-center w-full ${
                              isGraph
                                ? "h-64 md:h-[370px] lg:h-[450px]"
                                : "h-64 md:h-[250px] lg:h-[330px]"
                            }`}
                          >
                            {mediaObj.type === "video" ? (
                              <a
                                href={mediaObj.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full h-64 flex items-center justify-center cursor-pointer"
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
                                  className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-2 right-2 bg-theme-black/90 px-2 py-1 rounded text-[9px] md:text-[10px] font-mono text-theme-neutral-light border border-zinc-700 flex items-center gap-1.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {isGraph ? (
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
                          <div className="mt-auto pt-4">
                            <p className="text-center text-theme-neutral-muted tracking-tight leading-relaxed text-[11px] md:text-xs px-2">
                              <AutoSciText text={mediaObj.caption} />
                            </p>
                          </div>
                        </div>
                      );
                    })}
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
            className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 md:gap-6"
          >
            {SOFTWARES_DATA.map((software) => (
              <motion.div
                key={software.name}
                variants={fadeUpVariant}
                className="bg-theme-neutral-dark/20 border border-theme-neutral-muted/20 rounded-sm p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 md:gap-4 hover:border-theme-accent/50 hover:bg-[#0a0a0a] transition-all duration-300 group h-28 md:h-32 shadow-sm hover:shadow-[0_0_15px_rgba(250,250,51,0.1)]"
              >
                {software.logoUrl ? (
                  <img
                    src={software.logoUrl}
                    alt={`${software.name} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-all duration-300"
                  />
                ) : (
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-theme-neutral-muted/30 flex items-center justify-center bg-theme-black group-hover:border-theme-accent transition-colors duration-300">
                    <span className="text-theme-neutral-muted group-hover:text-theme-accent text-xs md:text-sm font-mono tracking-widest font-bold transition-colors duration-300">
                      {software.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                <span className="text-[10px] md:text-xs text-theme-accent group-hover:text-theme-heading transition-colors tracking-wide">
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
