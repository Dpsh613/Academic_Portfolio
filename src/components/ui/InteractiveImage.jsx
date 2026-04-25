import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const InteractiveImage = ({ src, alt = "Gallery image" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const ref = useRef(null);

  // Trigger when 50% of the image is inside the viewport
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    // Detect if the device relies on touch (doesn't support standard mouse hover)
    const checkTouch = () => {
      setIsTouchDevice(
        window.matchMedia("(hover: none) and (pointer: coarse)").matches,
      );
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isExpanded]);

  // If it's a mobile/touch device AND the image scrolled into view, show colors.
  const showColor = isTouchDevice && isInView;

  return (
    <>
      {/* --- Thumbnail --- */}
      <div
        ref={ref}
        onClick={() => setIsExpanded(true)}
        className={`w-full h-full bg-cover bg-center rounded-sm transition-all duration-[800ms] ease-out cursor-pointer 
          ${showColor ? "grayscale-0 opacity-100" : "grayscale opacity-60"} 
          hover:grayscale-0 hover:opacity-100
        `}
        style={{ backgroundImage: `url('${src}')` }}
        role="button"
        aria-label={alt}
      />

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            {/* Elegant Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-8 right-8 text-neutral-400 hover:text-white transition-colors duration-300 z-50 p-2"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Enlarged Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevents closing if clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveImage;
