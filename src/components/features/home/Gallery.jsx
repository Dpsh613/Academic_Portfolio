import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "../../Layout/SectionWrapper";
import { FadeUp } from "../../Layout/AnimatedWrapper";
import InteractiveImage from "../../ui/InteractiveImage";
import { images } from "../../../constants/galleryData";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const visibleImages = [
    images[currentIndex % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <SectionWrapper id="gallery">
      <FadeUp className="mb-16">
        <h2 className="mb-4">Beyond the Lab</h2>
        <h3 className="text-secondary tracking-wide">
          Moments of clarity outside the laboratory.
        </h3>
      </FadeUp>

      <div className="relative group w-full max-w-7xl mx-auto px-4 md:px-12">
        {/* FIX: Forced flex-row. Hidden images handled on the children below */}
        <div className="flex flex-row gap-4 overflow-hidden py-4 relative z-20">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, index) => (
              <motion.div
                key={img}
                layout
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                // FIX: On mobile, hide the 2nd and 3rd image so it acts like a 1-image slider!
                className={`${
                  index > 0 ? "hidden md:block" : "block"
                } w-full md:flex-1 h-[350px] shrink-0`}
              >
                <InteractiveImage src={img} alt="Gallery visual" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* FIX: Removed hidden md:block, moved inside slightly on mobile, cranked up z-index */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-[-10px] top-1/2 -translate-y-1/2 p-2 bg-theme-black/40 md:bg-transparent rounded-full text-white md:text-theme-neutral-light hover:text-theme-accent transition-colors z-400"
        >
          <ChevronLeft size={36} strokeWidth={1.5} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-[-10px] top-1/2 -translate-y-1/2 p-2 bg-theme-black/40 md:bg-transparent rounded-full text-white md:text-theme-neutral-light hover:text-theme-accent transition-colors z-40"
        >
          <ChevronRight size={36} strokeWidth={1.5} />
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
