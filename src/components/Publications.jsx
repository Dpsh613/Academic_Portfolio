import { motion } from "framer-motion";

const Publications = () => {
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
    <section id="publications" className="py-24 px-8 md:px-16 bg-neutral-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-20"
      >
        <h3 className="font-heading text-4xl font-medium tracking-tight text-white">
          Selected Publications
        </h3>
        <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
      </motion.div>

      <div className="flex flex-col gap-20">
        {[
          {
            tag: "Nature Physics • 2023",
            title: "Quantum Tunnelling in Bi-stable Ground States",
            desc: "Experimental evidence utilizing ND and INS techniques to observe spin-relaxation paradigms in novel lattice structures.",
          },
          {
            tag: "Physical Review Letters • 2018",
            title: "Magnetoelectric Properties & Spin-Dipole Coupling",
            desc: "Pioneering design routes to achieve ME coupling in multifunctional materials under extreme magnetic fields.",
          },
        ].map((pub, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center border-b border-neutral-800 pb-20 last:border-0 last:pb-0"
          >
            <div>
              <span className="block text-sm font-bold uppercase tracking-widest text-yellow-400 mb-4">
                {pub.tag}
              </span>
              <h4 className="font-heading text-3xl font-medium text-white mb-6">
                {pub.title}
              </h4>
              <p className="text-neutral-400 leading-relaxed font-light mb-8">
                {pub.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-yellow-400 transition-colors group"
              >
                Read Paper
              </a>
            </div>
            <div className="h-[300px] bg-black border border-neutral-800 rounded-sm flex items-center justify-center relative overflow-hidden group">
              {/* Placeholder for graphs */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-neutral-600 font-heading text-sm font-bold uppercase tracking-widest z-10">
                Figure / Graph Data
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
