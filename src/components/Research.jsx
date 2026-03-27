import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant.js";
import staggerContainer from "../animation/staggerContainer.js";

const Research = () => {
  return (
    <section
      id="research"
      // Matched outer padding exactly with Publications section
      className="relative min-h-[400px] w-full overflow-hidden py-24 px-8 md:px-16 bg-white"
    >
      {/* Header - Aligned exactly like Publications */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h3 className="font-heading text-4xl font-medium tracking-tight text-stone-900">
          Research Expertise
        </h3>
        <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
      </motion.div>

      {/* Cards Container - max-w-7xl ensures it matches the standard width bounds */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
      >
        {[
          {
            num: "01",
            title: "Core Physics",
            desc: "Experimental investigation of strongly correlated electron systems, focusing on quantum magnetism, spin dynamics, and complex magnetic ground states in low-dimensional materials exhibiting geometric and bond-dependent magnetic frustration.",
          },
          {
            num: "02",
            title: "Structural Property",
            desc: "Investigating the fundamental physics driven by the competition among electron correlation, spin-orbit coupling, and crystal field effects to elucidate the electronic states and origin of local magnetic moments in novel transition metal compounds.",
          },
          {
            num: "03",
            title: "Methodological Approach",
            desc: "Correlating macroscopic thermodynamic and transport measurements with microscopic magnetic and structural states. This relies on a comprehensive workflow-spanning solid-state material synthesis, spectroscopic determination of electronic structure (XAFS, XPS), and advanced large-scale facility probes.",
          },
        ].map((item) => (
          <motion.div
            key={item.num}
            variants={fadeUpVariant}
            // Refined Light Theme Card with Premium Hover State
            className="group flex flex-col h-full bg-gradient-to-br from-yellow-400/40 via-white to-yellow-400/40 border border-stone-200 p-8 md:p-10 rounded-2xl hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-[0_10px_40px_-10px_rgba(250,204,21,0.2)] hover:bg-yellow-50/20 transition-all duration-500 ease-out"
          >
            {/* Number Accent and Title */}
            <div className="mb-6">
              <h4 className="font-heading text-2xl font-bold text-stone-900 group-hover:text-yellow-900 transition-colors duration-300">
                {item.num}
                <span className="text-yellow-400">{". "}</span>
                {item.title}
              </h4>
            </div>

            {/* Description - flex-grow ensures perfect mathematical alignment at the bottom */}
            <p className="text-stone-600 leading-relaxed font-light flex-grow">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Research;
