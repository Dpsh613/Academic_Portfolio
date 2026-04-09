import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import staggerContainer from "../../animation/staggerContainer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent background scrolling when modal is open for a cleaner UX
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const images = [
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="gallery" className="py-24 px-8 md:px-16 bg-black relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h2 className="text-white mb-4">Beyond the Lab</h2>
        <h3 className="bg-heading-gradient text-transparent bg-clip-text">
          Moments of clarity outside the laboratory.
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            variants={fadeUpVariant}
            onClick={() => setSelectedImage(img)}
            className="h-[350px] bg-cover bg-center rounded-sm grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
            style={{ backgroundImage: `url('${img}')` }}
          ></motion.div>
        ))}
      </motion.div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            {/* Elegant Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
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
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Custom smooth ease
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevents closing if the user clicks the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
