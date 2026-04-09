import React, { useState } from "react";
import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import { presentationsData } from "../../constants/talksData";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedTabPanel from "../ui/AnimatedTabPanel";

const Talks = () => {
  const categories = Object.keys(presentationsData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section
      id="talks"
      className="relative w-full py-20 px-8 md:px-16 bg-theme-black"
    >
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-12"
      >
        <h2 className="text-theme-heading">Presentations & Talks</h2>
        <div className="w-24 h-0.5 bg-theme-accent mt-6"></div>
      </motion.div>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Tab Navigation Menu */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-wrap gap-4 md:gap-8 border-b border-theme-neutral-dark pb-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative pb-2 ${
                activeTab === category
                  ? "text-secondary"
                  : "text-theme-text hover:text-secondary hover:text-secondary-hover"
              }`}
            >
              {category}
              {/* Active Tab Underline Animation */}
              {activeTab === category && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-theme-accent"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>
        <AnimatedTabPanel activeKey={activeTab}>
          {presentationsData[activeTab].map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start p-6 rounded-sm bg-theme-neutral-dark/30 border border-transparent hover:border-theme-accent/50 transition-colors duration-300"
            >
              {/* Left Side: Year Badge */}
              <div className="flex-shrink-0 w-24">
                <span className="text-xl md:text-2xl font-mono text-theme-accent group-hover:text-theme-accent transition-colors">
                  {item.year}
                </span>
              </div>

              {/* Right Side: Details */}
              <div className="flex flex-col">
                <h3 className="mb-4 tracking-wider leading-snug">
                  {item.title}
                </h3>
                <p className="text-secondary font-light m-0">{item.venue}</p>
                {item.location && (
                  <span className="text-theme-accent text-xs font-bold uppercase tracking-wider mt-3 flex items-center gap-2">
                    <FaLocationDot /> {item.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </AnimatedTabPanel>
      </div>
    </section>
  );
};

export default Talks;
