import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";

const InteractiveImage = ({ src, alt = "Gallery image" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [mounted, setMounted] = useState(false); // Used for portal
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.5 });

  // Handle touch detection and portal mounting
  useEffect(() => {
    setMounted(true); // Ensures portal only runs on client side

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

  const showColor = isTouchDevice && isInView;

  // The Full Screen Modal - Teleported via Portal
  const ModalContent = (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsExpanded(false)}
          // Insanely high z-index to cover header
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md cursor-zoom-out"
        >
          {/* Elegant Close Button - Moved down to top-20 / top-24 so it clears the header */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-15 right-6 md:top-10 md:right-16 text-neutral-400 hover:text-white bg-black/40 hover:bg-theme-accent transition-all duration-300 z-50 p-3 rounded-full"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            src={src}
            alt={alt}
            className="w-auto h-auto max-w-full max-h-[80vh] md:max-w-[75vw] md:max-h-[75vh] object-contain rounded-sm shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* --- Thumbnail --- */}
      <div
        ref={ref}
        onClick={() => setIsExpanded(true)}
        className={`w-full h-full bg-cover bg-center rounded-sm transition-all duration-[800ms] ease-out cursor-zoom-in 
          ${showColor ? "grayscale-0 opacity-100" : "grayscale opacity-60"} 
          hover:grayscale-0 hover:opacity-100
        `}
        style={{ backgroundImage: `url('${src}')` }}
        role="button"
        aria-label={alt}
      />

      {/* --- Teleport the modal to the body so arrows and headers don't bleed through! --- */}
      {mounted && createPortal(ModalContent, document.body)}
    </>
  );
};

export default InteractiveImage;
