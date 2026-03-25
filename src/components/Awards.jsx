import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-8 md:px-16 bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h3
          variants={fadeUpVariant}
          className="font-heading text-3xl font-medium text-white mb-4"
        >
          Awards & Honors
        </motion.h3>
        <motion.div
          variants={fadeUpVariant}
          className="w-16 h-0.5 bg-yellow-400 mb-12"
        ></motion.div>

        <div className="flex flex-col gap-10">
          <motion.div variants={fadeUpVariant}>
            <h4 className="font-heading text-xl text-white mb-2">
              Excellence in Research Fellowship
            </h4>
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 block mb-3">
              National Science Foundation • 2022
            </span>
            <p className="text-neutral-400 font-light">
              Awarded for pioneering work in condensed matter data modeling.
            </p>
          </motion.div>
          <motion.div variants={fadeUpVariant}>
            <h4 className="font-heading text-xl text-white mb-2">
              Best Young Researcher Presentation
            </h4>
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 block mb-3">
              European Physical Society • 2020
            </span>
            <p className="text-neutral-400 font-light">
              Recognized for outstanding clarity and depth in scientific
              communication.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
