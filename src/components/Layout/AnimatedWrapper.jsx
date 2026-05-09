import React from "react";
import { motion, stagger } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import staggerContainer from "../../animation/staggerContainer";

// 1. fade up on scroll
export const FadeUp = ({ children, className = "", margin = "-50px" }) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// using these on the list or grid of items - as parent of list or grid items

export const Stagger = ({ children, className = "", margin = "-50px" }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// using these on childern elements inside stagger parent

export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div variants={fadeUpVariant} className={className}>
      {children}
    </motion.div>
  );
};
