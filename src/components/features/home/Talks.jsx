import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

import SectionWrapper from "../../Layout/SectionWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import { FadeUp } from "../../Layout/AnimatedWrapper";
import AnimatedTabPanel from "../../ui/AnimatedTabPanel";

// Ensure this import matches the export name in your talksData file
import { talksData } from "../../../constants/talksData";
import AutoSciText from "../../../utils/AutoSciText";

const Talks = () => {
  const categories = Object.keys(talksData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <SectionWrapper id="talks">
      <SectionHeader title="Presentations & Talks" />

      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation Menu */}
        <FadeUp className="flex flex-wrap gap-4 md:gap-8 border-b border-theme-neutral-dark pb-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 relative pb-2 ${
                activeTab === category
                  ? "text-secondary"
                  : "text-theme-neutral-light hover:text-secondary-hover"
              }`}
            >
              {category}
              {activeTab === category && (
                <motion.div
                  layoutId="activeTabIndicator"
                  // Added hidden md:block here
                  className="hidden md:block absolute bottom-[-17px] left-0 right-0 h-0.5 bg-theme-accent"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </FadeUp>

        {/* Tab Content Panel */}
        <AnimatedTabPanel activeKey={activeTab}>
          <div className="flex flex-col gap-4">
            {talksData[activeTab].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start p-6 rounded-sm bg-theme-neutral-dark/30 border border-transparent hover:border-theme-accent/50 transition-colors duration-300"
              >
                {/* LEFT SIDE: Year Badge */}
                <div className="flex-shrink-0 w-24">
                  <span className="text-xl md:text-2xl font-mono text-theme-accent group-hover:text-theme-accent-light transition-colors">
                    {item.year}
                  </span>
                </div>

                {/* RIGHT SIDE: Details */}
                <div className="flex flex-col">
                  <h3 className="mb-4 tracking-wider leading-snug">
                    <AutoSciText text={item.title} />
                  </h3>
                  <p className="text-secondary font-light m-0">
                    {item.institute}
                  </p>

                  {item.location && (
                    <span className="text-theme-accent text-xs font-bold uppercase tracking-wider mt-3 flex items-center gap-2">
                      <FaLocationDot /> {item.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedTabPanel>
      </div>
    </SectionWrapper>
  );
};

export default Talks;
