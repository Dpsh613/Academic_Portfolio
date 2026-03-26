import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant.js";
import staggerContainer from "../animation/staggerContainer.js";

const Research = () => {
  return (
    <section
      id="research"
      className=" backdrop-blur-[1px] inset-0 relative min-h-[400px] w-full overflow-hidden py-24 px-8 md:px-16"
    >
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <h3 className="font-heading text-4xl font-medium tracking-tight text-stone-50">
            Research Expertise
          </h3>
          <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
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
              desc: " Investigating the fundamental physics driven by the competition among electron correlation, spin-orbit coupling, and crystal field effects to elucidate the electronic states and origin of local magnetic moments in novel transition metal compounds",
            },
            {
              num: "03",
              title: "Methodological Approach",
              desc: "Correlating macroscopic thermodynamic and transport measurements with microscopic magnetic and structural states. This relies on a comprehensive workflow-spanning solid-state material synthesis, spectroscopic determination of electronic structure (XAFS, XPS), and advanced large-scale facility probes (neutron scattering, muon spin relaxation, and synchrotron X-rays).",
            },
          ].map((item) => (
            <motion.div
              key={item.num}
              variants={fadeUpVariant}
              className="border-t border-stone-300 pt-8 group"
            >
              <div className="font-heading text-xl text-stone-500 mb-4 group-hover:text-yellow-500 transition-colors">
                {item.num}
              </div>
              <h4 className="font-heading text-2xl font-medium mb-4 text-stone-50">
                {item.title}
              </h4>
              {/* Changed to stone-700/80 for a more 'hybrid' elegant feel than harsh black */}
              <p className="text-stone-200 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
