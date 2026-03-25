// import { motion } from "framer-motion";
// import fadeUpVariant from "../animation/fadeUpVariant";

// const Publications = () => {
//   return (
//     <section id="publications" className="py-24 px-8 md:px-16 bg-neutral-950">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeUpVariant}
//         className="mb-20"
//       >
//         <h3 className="font-heading text-4xl font-medium tracking-tight text-white">
//           Selected Publications
//         </h3>
//         <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
//       </motion.div>

//       <div className="flex flex-col gap-20">
//         {[
//           {
//             tag: "Nature Physics • 2023",
//             title: "Quantum Tunnelling in Bi-stable Ground States",
//             desc: "Experimental evidence utilizing ND and INS techniques to observe spin-relaxation paradigms in novel lattice structures.",
//           },
//           {
//             tag: "Physical Review Letters • 2018",
//             title: "Magnetoelectric Properties & Spin-Dipole Coupling",
//             desc: "Pioneering design routes to achieve ME coupling in multifunctional materials under extreme magnetic fields.",
//           },
//         ].map((pub, idx) => (
//           <motion.div
//             key={idx}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={fadeUpVariant}
//             className="grid md:grid-cols-2 gap-10 md:gap-16 items-center border-b border-neutral-800 pb-20 last:border-0 last:pb-0"
//           >
//             <div>
//               <span className="block text-sm font-bold uppercase tracking-widest text-yellow-400 mb-4">
//                 {pub.tag}
//               </span>
//               <h4 className="font-heading text-3xl font-medium text-white mb-6">
//                 {pub.title}
//               </h4>
//               <p className="text-neutral-400 leading-relaxed font-light mb-8">
//                 {pub.desc}
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-yellow-400 transition-colors group"
//               >
//                 Read Paper
//               </a>
//             </div>
//             <div className="h-[300px] bg-black border border-neutral-800 rounded-sm flex items-center justify-center relative overflow-hidden group">
//               {/* Placeholder for graphs */}
//               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black opacity-40 group-hover:opacity-100 transition-opacity"></div>
//               <span className="text-neutral-600 font-heading text-sm font-bold uppercase tracking-widest z-10">
//                 Figure / Graph Data
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Publications;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
// Install lucide-react or use SVGs
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";

const PublicationCard = ({ pub }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic: changes slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <motion.div variants={fadeUpVariant} className="flex flex-col">
      {/* The Sliding Card */}
      <div className="relative py-24 px-8 md:px-16 group h-[320px] w-full bg-neutral-900 border border-yellow-400 rounded-lg overflow-hidden flex flex-col justify-center transition-all duration-300 hover:border-yellow-600">
        {/* Navigation Arrows (Unsplash Style) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-20 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
        >
          <MdKeyboardDoubleArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 z-20 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
        >
          <MdKeyboardDoubleArrowRight size={20} />
        </button>

        {/* Content Slides */}
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {currentSlide === 0 && (
              <motion.div
                key="slide1"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="text-center"
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4">
                  {pub.tag}
                </span>
                <h4 className="font-heading text-2xl font-medium text-white leading-tight">
                  {pub.title}
                </h4>
              </motion.div>
            )}

            {currentSlide === 1 && (
              <motion.div
                key="slide2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="px-4"
              >
                <p className="text-neutral-400 text-center leading-relaxed text-sm italic">
                  "{pub.desc}"
                </p>
              </motion.div>
            )}

            {currentSlide === 2 && (
              <motion.div
                key="slide3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <div className="w-full h-32 bg-neutral-800 rounded flex items-center justify-center border border-dashed border-neutral-700">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest">
                    [ {pub.visualLabel} ]
                  </span>
                </div>
                <p className="mt-4 text-[10px] text-neutral-500 uppercase tracking-tighter">
                  Reference Visualization 01-A
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Slide Indicators (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-300 rounded-full ${currentSlide === i ? "w-4 bg-yellow-400" : "w-1 bg-neutral-700"}`}
            />
          ))}
        </div>
      </div>

      {/* Button Under the Card */}
      <div className="mt-6 flex justify-start">
        <a
          href={pub.link}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-yellow-400 transition-colors group"
        >
          Read Full Paper
          <span className="w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-8"></span>
        </a>
      </div>
    </motion.div>
  );
};

const Publications = () => {
  const data = [
    {
      tag: "Nature Physics • 2023",
      title: "Quantum Tunnelling in Bi-stable Ground States",
      desc: "Experimental evidence utilizing ND and INS techniques to observe spin-relaxation paradigms in novel lattice structures.",
      visualLabel: "Spin-Lattice Graph",
      link: "#",
    },
    {
      tag: "Physical Review Letters • 2018",
      title: "Magnetoelectric Properties & Spin-Dipole Coupling",
      desc: "Pioneering design routes to achieve ME coupling in multifunctional materials under extreme magnetic fields.",
      visualLabel: "ME Coupling Diagram",
      link: "#",
    },
    {
      tag: "Advanced Materials • 2021",
      title: "Synthetic Antiferromagnets in Thin Films",
      desc: "Exploring the thermal stability of synthetic AFMs for next-generation MRAM applications.",
      visualLabel: "Thin Film Layering",
      link: "#",
    },
    {
      tag: "Journal of Applied Physics • 2020",
      title: "Rare-Earth Oxides Synthesis",
      desc: "Methodology for synthesizing high-purity rare-earth crystals under 15GPa pressure.",
      visualLabel: "Crystal Structure",
      link: "#",
    },
  ];

  return (
    <section id="publications" className="py-24 px-8 md:px-16 bg-neutral-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h3 className="font-heading text-4xl font-medium tracking-tight text-white">
          Selected Publications
        </h3>
        <div className="w-12 h-0.5 bg-yellow-400 mt-4"></div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16"
      >
        {data.map((pub, idx) => (
          <PublicationCard key={idx} pub={pub} />
        ))}
      </motion.div>
    </section>
  );
};

export default Publications;
