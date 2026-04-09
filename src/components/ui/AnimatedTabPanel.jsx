import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabContentVariant } from "../../animation/tabVariants";

const AnimatedTabPanel = ({ activeKey, children, className }) => {
  return (
    <div className={`w-full ${className || ""}`}>
      {/* mode="wait" ensures old content fades out completely before new content enters, 
          letting the container naturally resize without breaking layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeKey}
          variants={tabContentVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col gap-8 w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTabPanel;
