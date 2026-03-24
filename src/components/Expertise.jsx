import { motion } from 'framer-motion';

const Expertise = () => {
    const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
  return (
    <section id="expertise" className="py-24 px-8 md:px-16 bg-neutral-950">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="mb-16"
          >
            <h3 className="font-heading text-4xl font-medium tracking-tight text-white">Core Expertise</h3>
            <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { num: "01", title: "Novel Synthesis", desc: "Experience in floating zone and flux growth of high-quality single crystals, forming the basis for advanced material analysis." },
              { num: "02", title: "Spectroscopy", desc: "Expertise in utilizing high-level probes such as inelastic neutron scattering and muon-spin spectroscopy (μSR)." },
              { num: "03", title: "Data Science", desc: "Advanced Python-based modeling of magnetic structures, excitation spectra, and diffuse scattering analysis." }
            ].map((item) => (
              <motion.div key={item.num} variants={fadeUpVariant} className="border-t border-neutral-800 pt-8 group">
                <div className="font-heading text-xl text-neutral-600 mb-4 group-hover:text-yellow-400 transition-colors">{item.num}</div>
                <h4 className="font-heading text-2xl font-medium mb-4 text-white">{item.title}</h4>
                <p className="text-neutral-400 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

  )
}

export default Expertise