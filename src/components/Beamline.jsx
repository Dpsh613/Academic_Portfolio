import { motion } from "framer-motion";
const Beamline = () => {
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
    <section id="beamline" className="py-24 px-8 md:px-16 bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h3 className="font-heading text-4xl font-medium tracking-tight text-white mb-4">
          Beamline Access
        </h3>
        <p className="text-neutral-400 text-lg font-light">
          Principal investigations at world-renowned neutron and muon sources.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="ml-2 md:ml-4 border-l border-neutral-800 flex flex-col gap-12"
      >
        {[
          {
            year: "2024",
            title: "DMC & AMATERAS | Paul Scherrer Institut (PSI)",
            role: "Principal Investigator",
            desc: "Investigation of spin dynamics in triangular lattice antiferromagnets.",
          },
          {
            year: "2023",
            title: "LET Spectrometer | ISIS Neutron & Muon Source",
            role: "Principal Investigator",
            desc: "Mapping the magnetic phase diagram of frustrated pyrochlore oxides.",
          },
          {
            year: "2022",
            title: "AMATERAS | J-PARK",
            role: "Co-Investigator",
            desc: "High-pressure neutron diffraction studies on quantum spin liquids.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeUpVariant}
            className="relative pl-8 md:pl-12"
          >
            {/* Yellow glow dot for high contrast focus */}
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>
            <span className="block font-heading text-yellow-400 font-bold mb-2 tracking-wide">
              {item.year}
            </span>
            <h4 className="text-2xl text-white font-medium mb-1">
              {item.title}
            </h4>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              {item.role}
            </p>
            <p className="text-neutral-400 font-light">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Beamline;
