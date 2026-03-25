import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";

const Talks = () => {
  return (
    <section
      id="talks"
      className="relative w-full py-24 px-8 md:px-16 bg-black"
    >
      {/* 4. Content wrapper. 'relative z-10' keeps this ABOVE the dark overlay, 
             and pushes the section height down normally, preventing overlaps. */}
      <div className="relative z-10">
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
            Invited Talks
          </motion.h3>
          <motion.div
            variants={fadeUpVariant}
            className="w-16 h-0.5 bg-yellow-400 mb-12"
          ></motion.div>

          <div className="flex flex-col gap-10">
            <motion.div variants={fadeUpVariant}>
              <h4 className="font-heading text-xl text-white mb-2">
                APS March Meeting | Las Vegas, NV
              </h4>
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 block mb-3">
                Oral Presentation • 2023
              </span>
              <p className="text-neutral-400 font-light">
                "Excitations in the quantum spin liquid candidate YbMgGaO4."
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <h4 className="font-heading text-xl text-white mb-2">
                APS March Meeting | Las Vegas, NV
              </h4>
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 block mb-3">
                Oral Presentation • 2023
              </span>
              <p className="text-neutral-400 font-light">
                "Excitations in the quantum spin liquid candidate YbMgGaO4."
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <h4 className="font-heading text-xl text-white mb-2">
                Intl. Conf. on Neutron Scattering | Buenos Aires
              </h4>
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 block mb-3">
                Poster Presentation • 2022
              </span>
              <p className="text-neutral-400 font-light">
                "Developing new toolsets for magnetic diffuse scattering
                analysis."
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <h4 className="font-heading text-xl text-white mb-2">
                Intl. Conf. on Neutron Scattering | Buenos Aires
              </h4>
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 block mb-3">
                Poster Presentation • 2022
              </span>
              <p className="text-neutral-400 font-light">
                "Developing new toolsets for magnetic diffuse scattering
                analysis."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Talks;
