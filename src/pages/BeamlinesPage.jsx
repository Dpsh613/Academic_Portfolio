import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import { beamlineData } from "../constants/beamlineData";
import {
  ArrowUpRight,
  MapPin,
  Microscope,
  Clock,
  FileText,
} from "lucide-react";

// Extract 5 images for the Hero Bento Grid
const heroGridImages = [
  {
    url: beamlineData[0].instruments[0].instImg,
    size: "col-span-2 row-span-2",
  },
  {
    url: beamlineData[0].instruments[1].instImg,
    size: "col-span-1 row-span-1",
  },
  {
    url: beamlineData[1].instruments[0].instImg,
    size: "col-span-1 row-span-1",
  },
  {
    url: beamlineData[3].instruments[0].instImg,
    size: "col-span-1 row-span-1",
  },
  {
    url: beamlineData[2].instruments[0].instImg,
    size: "col-span-2 row-span-1",
  },
];

const BeamlinePage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-zinc-950 min-h-screen text-zinc-300 selection:bg-yellow-400/30 selection:text-yellow-400"
    >
      <div className="relative min-h-screen w-full flex items-center bg-[url('./assets/images/img5.jpg')] bg-cover bg-center border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/80 "></div>
        <div className="w-full max-w-7xl mx-auto  pt-32 pb-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-px bg-yellow-400"></span>
                <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs font-bold">
                  Experimental Records
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="font-heading text-5xl md:text-7xl font-light leading-tight text-white tracking-tight"
              >
                Beamline <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Access
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-8 text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-md"
              >
                Beamtime awarded at leading neutron, muon and synchrotron
                acilities for precision experiments across multiple instruments
                and approved proposals.
              </motion.p>
            </motion.div>
          </div>

          {/* RIGHT BENTO GRID */}
          <div className="lg:col-span-7 grid grid-cols-3 grid-rows-3 gap-3 h-[500px]">
            {heroGridImages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`${item.size} relative group overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/50 shadow-2xl`}
              >
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={item.url}
                  alt={`Instrument ${idx}`}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-32 md:space-y-48">
        {beamlineData.map((facility, fIdx) => (
          <motion.div
            key={fIdx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
          >
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-800/50 group">
                  <img
                    src={facility.bgImg}
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>

                  {facility.logo && (
                    <div className="absolute bottom-6 left-6 w-20 h-18 bg-zinc-950/80 backdrop-blur-md rounded-xl p-3 border border-zinc-800 shadow-xl">
                      <img
                        src={facility.logo}
                        alt="Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {facility.facility}
                  </h2>
                  <div className="flex items-center gap-2 text-yellow-500 font-mono text-sm tracking-widest uppercase mb-6">
                    <MapPin className="w-4 h-4" />
                    {facility.location}
                  </div>
                  <p className="text-zinc-400 leading-relaxed font-light mb-8">
                    {facility.desc}
                  </p>

                  {facility.link && (
                    <a
                      href={facility.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-yellow-400 transition-colors group"
                    >
                      Visit Official Portal
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-yellow-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
                <Microscope className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                  Instruments Overview
                </h3>
              </div>

              <div className="space-y-16">
                {facility.instruments.map((inst, iIdx) => (
                  <div key={iIdx} className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {inst.name}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                          {inst.desc}
                        </p>
                      </div>
                      {inst.link && (
                        <a
                          href={inst.link}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 text-xs font-mono uppercase tracking-widest text-yellow-400 hover:text-yellow-200 transition-colors flex items-center gap-1"
                        >
                          View Specs <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-zinc-800/50 relative">
                      <img
                        src={inst.instImg}
                        alt={inst.name}
                        className="w-full h-full object-cover object-center opacity-50 hover:opacity-80 hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur px-3 py-1.5 rounded-md border border-zinc-800 flex items-center gap-2">
                        <FileText className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                          Proposals - {inst.proposals.length}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-2">
                      {inst.proposals.map((prop, pIdx) => (
                        <div
                          key={pIdx}
                          className="group bg-zinc-900/30 hover:bg-zinc-900/80 border border-zinc-800/50 hover:border-yellow-400/30 rounded-lg p-5 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                        >
                          <div className="shrink-0 md:w-32 flex flex-col gap-2">
                            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                              ID: {prop.id}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-500 uppercase tracking-wider">
                              <Clock className="w-3 h-3" /> {prop.awarded}
                            </span>
                          </div>

                          <p className="text-sm text-zinc-300 font-light leading-relaxed">
                            {prop.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BeamlinePage;
