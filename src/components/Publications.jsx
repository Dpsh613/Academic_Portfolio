import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import fadeUpVariant from "../animation/fadeUpVariant";

const Publications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pubData = [
    {
      tag: "Journal of Alloys and Compounds • 2025",
      title:
        "Exploring the disordered magnetic ground state and spin dynamics in the honeycomb oxide Na3Cu2SbO6",
      desc: "Experimental evidence utilizing ND and INS techniques to observe spin-relaxation paradigms in novel lattice structures. This study provides a new framework for understanding quantum fluctuations in frustrated magnets.",
      imgLabel: "Excitation Spectrum Analysis",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0925838825026416?via%3Dihub",
    },
    {
      tag: "Journal of Alloys and Compounds • 2025",
      title:
        "Successive antiferromagnetic and ferro-magnetic phase transitions in PrRu2Al2B",
      desc: "Pioneering design routes to achieve ME coupling in multifunctional materials under extreme magnetic fields. We report a record-high coupling constant in rare-earth oxides.",
      imgLabel: "Magnetic Phase Diagram",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0925838825013143?via%3Dihub",
    },
    {
      tag: "Journal of Alloys and Compounds • 2024",
      title:
        "Exploring superconductivity in Ba3Ir4Ge16: Experimental and theoretical insights",
      desc: "Exploring the thermal stability of synthetic AFMs for next-generation MRAM applications. Our results demonstrate enhanced stability up to 400K.",
      imgLabel: "Crystal Lattice Render",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0925838823046777?via%3Dihub",
    },
  ];

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
    <section id="publications" className="py-24 px-8 md:px-16 bg-neutral-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h3 className="font-heading text-4xl font-medium tracking-tight text-white">
          Selected Publications
        </h3>
        <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
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
              <span className="block text-[12px] font-bold uppercase tracking-[0.3em] text-yellow-400 mb-6">
                {pubData[currentIndex].tag}
              </span>
              <h4 className="font-heading text-3xl font-medium text-white mb-6 leading-tight">
                {pubData[currentIndex].title}
              </h4>
              <p className="text-neutral-400 font-light leading-relaxed mb-10">
                {pubData[currentIndex].desc}
              </p>

              <div>
                {/* DYNAMIC LINK APPLIED HERE */}
                <a
                  href={pubData[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-yellow-400 transition-colors group/link"
                >
                  Read More
                  <ExternalLink
                    size={14}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                  />
                </a>
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
        <button className="px-8 py-4 border border-yellow-400 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-4">
          View All Publications
          <MdOutlineArrowRightAlt size={30} className="text-current" />
        </button>
      </motion.div>

      {/* --- NEW SECTION: HANDS-ON EXPERTISE --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="flex items-center gap-6 mb-12">
          <h3 className="font-heading text-4xl font-medium font-light tracking-wide text-white">
            Hands-on Expertise
          </h3>
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

              <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-yellow-400 mb-4">
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

export default Publications;
