import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fadeUpVariant from "../../animation/fadeUpVariant";
import { SecondaryBorder } from "../ui/Button";
import { MonoLink } from "../ui/Button";
import { pubData } from "../../constants/publicationsData";

// IMPORTANT: Import the smart formatter we created so your formulas look perfect!
import AutoSciText from "../../utils/AutoSciText";

const PublicationsSummary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000); // Changes every 5 seconds

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
              <span className="block text-[12px] font-bold uppercase tracking-[0.3em] text-secondary mb-6">
                {pubData[currentIndex].tag}
              </span>

              <h3 className="text-white mb-6 leading-tight">
                {/* Wrapped title in AutoSciText to format formulas */}
                <AutoSciText text={pubData[currentIndex].title} />
              </h3>

              {/* FIX: Because desc is an array, we map over it to create bullet points/paragraphs */}
              <div className="text-neutral-400 font-light leading-relaxed mb-10 space-y-3">
                {pubData[currentIndex].desc.map((paragraph, idx) => (
                  <p key={idx} className="text-sm">
                    • <AutoSciText text={paragraph} />
                  </p>
                ))}
              </div>

              <div>
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
            <div className="bg-black relative min-h-[300px] flex flex-col items-center justify-center overflow-hidden p-8">
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

              {/* FIX: Properly rendering the image tag with correct sizing */}
              <img
                src={pubData[currentIndex].img}
                alt={pubData[currentIndex].imgLabel}
                className="relative z-10 w-full max-w-[200px] h-auto object-contain mb-8 group-hover:scale-105 transition-transform duration-500"
              />

              <div className="z-10 text-center relative w-full">
                <div className="w-20 h-0.5 bg-yellow-400/30 mx-auto mb-4"></div>
                <span className="text-neutral-600 font-heading text-[10px] font-bold uppercase tracking-[0.2em]">
                  {/* Wrapped in AutoSciText so labels like "Na3Cu2SbO6" format correctly! */}
                  <AutoSciText text={pubData[currentIndex].imgLabel} />
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
    </section>
  );
};

export default PublicationsSummary;
