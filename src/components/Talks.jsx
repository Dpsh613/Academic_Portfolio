import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant"; // Assuming you have this
import staggerContainer from "../animation/staggerContainer"; // Assuming you have this

const Talks = () => {
  // 1. Structured Data grouped by Hierarchy/Importance
  const presentationsData = {
    "Invited Talks": [
      {
        year: "2025",
        title: "Novel Emergent Properties of Quantum Materials",
        venue:
          "FEL Colloquium, Raja Ramanna Centre for Advanced Technology (RRCAT)",
        location: "Indore, India",
      },
    ],
    "Contributed Talks": [
      {
        year: "2022",
        title:
          "Magnetic Excitations In a Novel 1D, Spin-1/2 Chain Magnet: CuSb2O4",
        venue: "66th DAE Solid State Physics Symposium, BIT-Mesra",
        location: "India",
      },
    ],
    "Poster Presentations": [
      {
        year: "2025",
        title:
          "Exploring the disordered magnetic ground state and spin dynamics in the honeycomb oxide Na3Cu2SbO6",
        venue:
          "Synchrotron X-ray User Outreach Workshop (DST, India - DESY, Germany Collaboration), IIT-BHU",
        location: "Varanasi, India",
      },
      {
        year: "2022",
        title:
          "Investigation of the superconducting gap structure in the layered caged compound Ba3Ir4Ge16 using muon spin relaxation and rotation",
        venue:
          "International Conference on Spectroscopies of Novel Superconductors (SNS), IISC Bangalore",
        location: "India",
      },
      {
        year: "2022",
        title: "Large Magnetocaloric Effect in Ho15Si9C",
        venue:
          "Conference on Emergent phenomena in Quantum MATerials (E-QMAT), IIT-Roorkee",
        location: "India",
      },
    ],
    "Schools & Workshops": [
      {
        year: "2019",
        title: "Interactive workshop on “Experimental physics” (IWEP-2019)",
        venue: "Sponsored by West Bengal state council of Science & Technology",
        location: "",
      },
      {
        year: "2018",
        title: "C.K. MAJUMDAR memorial summer workshop",
        venue: "S.N. Bose national centre for basic science",
        location: "",
      },
    ],
  };

  // State to track which tab is currently active
  const categories = Object.keys(presentationsData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section
      id="talks"
      className="relative w-full py-24 px-8 md:px-16 bg-neutral-950"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-12"
        >
          <h3 className="font-heading text-4xl font-medium tracking-tight text-white">
            Presentations & Talks
          </h3>
          <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
        </motion.div>

        {/* Tab Navigation Menu */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-wrap gap-4 md:gap-8 border-b border-neutral-800 pb-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative pb-2 ${
                activeTab === category
                  ? "text-yellow-400"
                  : "text-neutral-500 hover:text-white"
              }`}
            >
              {category}
              {/* Active Tab Underline Animation */}
              {activeTab === category && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-yellow-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content Area with Animation */}
        <div className="min-h-[400px]">
          {" "}
          {/* Min height prevents page jumping when switching tabs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // Changing the key triggers the animation
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col gap-8"
            >
              {presentationsData[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start p-6 rounded-sm bg-neutral-900/30 border border-transparent hover:border-yellow-900 transition-colors duration-300"
                >
                  {/* Left Side: Year Badge */}
                  <div className="flex-shrink-0 w-24">
                    <span className="text-xl md:text-2xl font-heading font-medium text-yellow-400/80 group-hover:text-yellow-400 transition-colors">
                      {item.year}
                    </span>
                  </div>

                  {/* Right Side: Details */}
                  <div className="flex flex-col">
                    <h4 className="font-heading text-xl text-white mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                      {item.venue}
                    </p>
                    {item.location && (
                      <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider mt-3 block">
                        📍 {item.location}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Talks;
