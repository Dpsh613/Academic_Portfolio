import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fadeUpVariant from "../../animation/fadeUpVariant";
import { SecondaryBorder } from "../ui/Button";
import { MonoLink } from "../ui/Button";
import { pubData } from "../../constants/publicationsData";

const PublicationsSummary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const expertiseData = [
    {
      category: "Synthesis",
      skills: "Solid-state reaction, Arc-furnace, Optical Floating Zone.",
    },
    {
      category: "Structural Analysis",
      skills:
        "Lab based XRD (Bruker D8 Advance), Synchrotron XRD (RRCAT, BL12, Indus-2), SEM-EDS.",
    },
    {
      category: "Magnetometry & Transport",
      skills:
        "DC and AC magnetization (MPMS3); Heat capacity and electrical transport (PPMS - Quantum Design).",
    },
    {
      category: "Spectroscopy",
      skills:
        "XPS, Raman scattering, UV-Vis-NIR, Photoluminescence, and Dielectric.",
    },
    {
      category: "Microscopic Local Probes",
      skills:
        "Muon Spin Relaxation (µSR), Neutron Diffraction (ND), Inelastic Neutron Scattering (INS), X-ray Absorption Fine Structure.",
    },
    {
      category: "Software",
      skills:
        "FullProf, JANA, WiMDA, Mantid, Demeter (Athena, Artemis, Hephaestus), Python, Fortran, Mathematica, VESTA, OriginLab, LaTeX.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Changes every 10 seconds

    // This cleanup function clears the timer whenever the slide changes manually,
    // preventing double-skipping bugs.
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pubData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pubData.length - 1 : prev - 1));
  };

  return (
    <section id="publications" className="py-20 px-8 md:px-16 bg-theme-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h2 className="text-theme-heading">Selected Publications</h2>
        <div className="w-24 h-0.5 bg-theme-accent mt-6"></div>
      </motion.div>

      <div className="relative group max-w-6xl mx-auto mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-0 border border-yellow-800 bg-neutral-900/20 rounded-sm overflow-hidden"
          >
            {/* Left Side: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-yellow-400">
              <span className="block text-[12px] font-bold uppercase tracking-[0.3em] bg-heading-gradient text-transparent bg-clip-text mb-6">
                {pubData[currentIndex].tag}
              </span>
              <h3 className="text-white mb-6 leading-tight">
                {pubData[currentIndex].title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed mb-10">
                {pubData[currentIndex].desc}
              </p>

              <div>
                {/* DYNAMIC LINK APPLIED HERE */}
                <MonoLink
                  href={pubData[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </MonoLink>
              </div>
            </div>

            {/* Right Side: Visual/Graph */}
            <div className="bg-black relative min-h-[300px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]"></div>
              <div className="z-10 text-center">
                <div className="w-20 h-0.5 bg-yellow-400/30 mx-auto mb-4"></div>
                <span className="text-neutral-600 font-heading text-[10px] font-bold uppercase tracking-[0.2em]">
                  {pubData[currentIndex].imgLabel}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 p-2 text-neutral-500 hover:text-yellow-400 transition-colors"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 p-2 text-neutral-500 hover:text-yellow-400 transition-colors"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="mt-[-10] mb-20 flex justify-center"
      >
        <SecondaryBorder to="/beamline">View All Publications</SecondaryBorder>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="flex items-center gap-6 mb-12">
          <h2 className="font-heading text-fluid-2 font-light tracking-tight text-white">
            Hands-on Expertise
          </h2>
          <div className="flex-grow h-px bg-neutral-500"></div>
        </div>

        {/* The 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-neutral-800 bg-neutral-900/10 hover:bg-neutral-900/30 hover:border-yellow-800 transition-all duration-300 rounded-sm group relative overflow-hidden"
            >
              {/* Subtle yellow highlight bar on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>

              <h4 className="tracking-[0.1em]  bg-heading-gradient text-transparent bg-clip-text font-light mb-4">
                {item.category}
              </h4>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PublicationsSummary;
