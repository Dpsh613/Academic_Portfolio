import { motion } from "framer-motion";

const Talks = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <section className="py-24 px-8 md:px-16 bg-black grid md:grid-cols-2 gap-20">
      {/* Talks */}
      <motion.div
        id="talks"
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
      {/* Awards */}
      <motion.div
        id="awards"
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

export default Talks;
