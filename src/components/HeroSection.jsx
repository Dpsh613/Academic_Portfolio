import { motion } from 'framer-motion';
const HeroSection = () => {
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
    <section id="home" className="min-h-screen pt-32 px-8 md:px-16 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center bg-black">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="pr-4"
          >
            <motion.div variants={fadeUpVariant} className="border border-yellow-400 text-yellow-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] inline-block mb-8 rounded-sm">
              Principal Investigator
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="font-heading text-[clamp(3.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-6 text-white">
              Arnab Kanti<br />
              <span className="font-light text-neutral-500">Jana</span>
            </motion.h1>
            <motion.h2 variants={fadeUpVariant} className="font-normal text-lg tracking-widest uppercase text-yellow-400 mb-6">
              Experimental Condensed Matter Physicist
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-neutral-300 text-lg max-w-lg mb-10 leading-relaxed font-light">
              Unraveling the microscopic mysteries of the universe through spin-dipole coupling, quantum tunneling, and novel material synthesis.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <a href="#publications" className="bg-yellow-400 text-black px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-yellow-300 transition-colors rounded-sm">
                Selected Works
              </a>
              <a href="#expertise" className="border border-neutral-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:border-yellow-400 hover:text-yellow-400 transition-colors rounded-sm">
                Explore Expertise
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[50vh] md:h-[70vh] bg-neutral-900 border border-neutral-800 rounded-sm overflow-hidden relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800" 
              alt="Laboratory" 
              className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </section>
  )
}

export default HeroSection