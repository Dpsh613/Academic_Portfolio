import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import img from "../assets/images/img4.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[url('./assets/images/img1.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/80 selection:bg-yellow-400/30">
        <div className="container mx-auto px-8 md:px-16 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 w-full mt-5 pt-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col justify-center gap-2 md:gap-5"
            >
              <motion.h1
                variants={fadeUpVariant}
                className="font-heading text-[clamp(3rem,6vw,5.5rem)] font-light leading-tight tracking-tight text-white"
              >
                Arnab Kanti{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600">
                  Jana
                </span>
              </motion.h1>

              <motion.h2
                variants={fadeUpVariant}
                className="font-normal text-sm md:text-lg tracking-[clamp(0.05em,0.6vw,0.21em)] uppercase text-yellow-400"
              >
                Experimental Condensed Matter Physicist
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="max-w-xl text-neutral-300 text-sm md:text-base leading-relaxed mt-4 font-light border-l-2 border-yellow-500 pl-4"
              >
                Specializing in magnetic frustration, quantum spin liquids, and
                superconductivity. Leveraging world-class neutron, muon, and
                synchrotron facilities across the globe to uncover the
                atomic-level behavior of condensed matter.
              </motion.p>

              {/* Optional: Add a quick stats row to add professional weight */}
              <motion.div
                variants={fadeUpVariant}
                className="flex gap-8 mt-6 border-b border-white/10 pb-6 w-max"
              >
                <div>
                  <p className="text-yellow-400 font-bold text-2xl">10+</p>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">
                    Publications
                  </p>
                </div>
                <div>
                  <p className="text-yellow-400 font-bold text-2xl">5</p>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">
                    Global Facilities
                  </p>
                </div>
              </motion.div>

              <motion.a
                variants={fadeUpVariant}
                href="#publications"
                className="bg-yellow-400 w-60 text-black px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(250,204,21,0.3)] transition-all duration-300 ease-in-out rounded-sm"
              >
                All Publications
              </motion.a>
            </motion.div>

            {/* RIGHT SIDE: Dedicated space for future image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center w-full h-full min-h-[50vh]"
            >
              {/* FUTURE IMAGE GOES HERE */}

              {/* Replace your current image div with this: */}
              <div className="relative h-[450px] w-[350px]">
                {/* The decorative offset border */}
                <div className="absolute inset-0 border-2 border-yellow-400/50 translate-x-4 translate-y-4 rounded-sm z-0 hidden md:block"></div>

                {/* The Image Container */}
                <div className="absolute inset-0 bg-neutral-900 overflow-hidden rounded-sm z-10 shadow-2xl shadow-black/50">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                    }
                    alt="Arnab Kanti Jana"
                    className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:opacity-100 hover:grayscale-0 hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
