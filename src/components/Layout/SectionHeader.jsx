// components/Layout/SectionHeader.jsx
import React from "react";
import { FadeUp } from "./AnimatedWrapper";

const SectionHeader = ({ title, className = "" }) => {
  return (
    <FadeUp margin="-100px" className={`mb-12 md:mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {/* Removed the extra {title} inside the div so it just acts as an underline */}
      <div className="w-24 h-1 bg-theme-accent mt-4 md:mt-6 rounded-full"></div>
    </FadeUp>
  );
};

export default SectionHeader;
