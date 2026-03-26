import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"; // Optional: npm i lucide-react
import { MdOutlineArrowRightAlt } from "react-icons/md";
import fadeUpVariant from "../animation/fadeUpVariant";

const Publications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pubData = [
    {
      tag: " Journal of Alloys and Compounds •  2025",
      title:
        "Exploring the disordered magnetic ground state and spin dynamics in the honeycomb oxide Na3Cu2SbO6,",
      desc: "Experimental evidence utilizing ND and INS techniques to observe spin-relaxation paradigms in novel lattice structures. This study provides a new framework for understanding quantum fluctuations in frustrated magnets.",
      imgLabel: "Excitation Spectrum Analysis",
    },
    {
      tag: "Journal of Alloys and Compounds • 2025",
      title:
        "Successive antiferromagnetic and ferro-magnetic phase transitions in PrRu2Al2B: A comprehensive study of magnetic transitions",
      desc: "Pioneering design routes to achieve ME coupling in multifunctional materials under extreme magnetic fields. We report a record-high coupling constant in rare-earth oxides.",
      imgLabel: "Magnetic Phase Diagram",
    },
    {
      tag: "Journal of Alloys and Compounds • 2024",
      title:
        "Exploring superconductivity in Ba3Ir4Ge16:Experimental and theoretical insights",
      desc: "Exploring the thermal stability of synthetic AFMs for next-generation MRAM applications. Our results demonstrate enhanced stability up to 400K.",
      imgLabel: "Crystal Lattice Render",
    },
  ];

  // Auto-slide logic
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide();
  //   }, 5000); // Changes every 5 seconds
  //   return () => clearInterval(timer);
  // }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pubData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pubData.length - 1 : prev - 1));
  };

  return (
    <section id="publications" className="py-24 px-8 md:px-16 bg-neutral-950">
      {/* Section Header - Styled like your Research section */}
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

      {/* Slider Container */}
      <div className="relative group max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-yellow-800 bg-neutral-900/20 rounded-sm overflow-hidden"
          >
            {/* Left Side: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-yellow-400">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-400 mb-6">
                {pubData[currentIndex].tag}
              </span>
              <h4 className="font-heading text-3xl font-medium text-white mb-6 leading-tight">
                {pubData[currentIndex].title}
              </h4>
              <p className="text-neutral-400 font-light leading-relaxed mb-10">
                {pubData[currentIndex].desc}
              </p>

              <div>
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0925838825026416?via%3Dihub"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-yellow-400 transition-colors group/link"
                >
                  {/* i need 3 links and not one link */}
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
              {/* Subtle Grid Background */}
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

      {/* Section Footer: View All Button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="mt-20 flex justify-center"
      >
        <button className="px-8 py-4 border border-yellow-400 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-4">
          View All Publications
          <MdOutlineArrowRightAlt size={30} text-yellow-400 />
        </button>
      </motion.div>
    </section>
  );
};

export default Publications;
