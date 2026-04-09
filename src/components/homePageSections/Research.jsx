import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant.js";
import staggerContainer from "../../animation/staggerContainer.js";
import { researchData } from "../../constants/researchData.jsx";

const Research = () => {
  return (
    <section
      id="research"
      className="relative w-full py-20 px-8 md:px-16 bg-theme-black"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h2 className="text-theme-heading">Research Experties</h2>
        <div className="w-24 h-0.5 bg-theme-accent mt-6"></div>
      </motion.div>

      {/* ONE BIG CONTAINER - VERTICAL LIST */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto w-full border border-theme-accent-light p-8 md:p-12 backdrop-blur-sm shadow-xl"
      >
        <div className="flex flex-col divide-y divide-zinc-800/60">
          {researchData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariant}
              className="flex flex-col md:flex-row gap-4 md:gap-12 py-10 first:pt-0 last:pb-0"
            >
              {/* Left Side: Number & Heading */}
              <div className="md:w-1/3 shrink-0">
                <span className="font-mono text-secondary font-fluid-2 font-light mb-2 block">
                  {item.id}.
                </span>
                <h3 className="text-secondary">{item.title}</h3>
              </div>

              {/* Right Side: Description */}
              <div className="md:w-2/3 flex items-center">
                <p className="text-theme-neutral-light leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Research;
