import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import { beamlineData } from "../constants/beamlineData";
import { MonoLink } from "../components/ui/Button";
import { MapPin, Microscope, Clock, FileText } from "lucide-react";
import BentoGrid from "../components/ui/BentoGrid";
import AutoSciText from "../utils/AutoSciText";

const BeamlinePage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative"
    >
      {/* --- HERO SECTION WITH RESTORED BACKGROUND IMAGE --- */}
      <div className="relative w-full pt-32 pb-20 lg:pb-32 overflow-hidden">
        {/* Background Image - UPDATE THE URL PATH HERE TO YOUR IMAGE */}
        <div className="absolute inset-0 bg-[url('./assets/images/img5.jpg')] bg-cover bg-top z-0" />

        {/* Overlay gradient so the text is readable and it fades nicely into the solid black bottom */}
        <div className="absolute inset-0 bg-theme-black/50 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-theme-black z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-5"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-px bg-theme-accent"></span>
                <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold">
                  Experimental Records
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="leading-tight text-4xl md:text-5xl lg:text-6xl"
              >
                Beamline <br />
                <span className="font-semibold text-secondary transition-all duration-300 hover:bg-text-secondary-hover">
                  Access
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-6 max-w-xl text-theme-neutral-light border-l-4 border-theme-accent pl-4 md:pl-6 md:text-base"
              >
                A proven track record of securing beamtime at leading neutron,
                muon, and synchrotron facilities worldwide. High precision
                experiments conducted across multiple instruments through highly
                competitive, peer-reviewed proposals.
              </motion.p>
            </motion.div>

            {/* Right Column: Bento Grid */}
            <BentoGrid />
          </div>
        </div>
      </div>

      {/* --- FACILITIES LIST SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-32 md:space-y-48 relative z-10">
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
                <div className="relative h-48 rounded-2xl overflow-hidden border border-theme-neutral-muted/50 group">
                  <img
                    src={facility.bgImg}
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-black to-transparent"></div>

                  {facility.logo && (
                    <div className="absolute bottom-6 left-6 w-20 h-18 bg-theme-black/80 backdrop-blur-md rounded-xl p-3 border border-theme-neutral-dark shadow-xl">
                      <img
                        src={facility.logo}
                        alt="Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-theme-heading mb-2 leading-tight">
                    {facility.facility}
                  </h2>
                  <div className="flex items-center gap-2 text-theme-accent font-mono text-sm tracking-widest uppercase mb-6">
                    <MapPin className="w-4 h-4" />
                    {facility.location}
                  </div>
                  <p className="text-theme-neutral-light leading-relaxed font-light mb-8">
                    {facility.desc}
                  </p>

                  {facility.link && (
                    <MonoLink
                      href={facility.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Official Portal
                    </MonoLink>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center gap-4 border-b border-theme-neutral-muted/50 pb-4">
                <Microscope className="w-6 h-6 text-theme-accent" />
                <h3 className="text-xl font-bold text-theme-heading uppercase tracking-widest">
                  Instruments Overview
                </h3>
              </div>

              <div className="space-y-16">
                {facility.instruments.map((inst, iIdx) => (
                  <div key={iIdx} className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div>
                        <h3 className="text-theme-heading mb-2">{inst.name}</h3>
                        <p className="text-theme-neutral-light text-sm leading-relaxed max-w-2xl">
                          <AutoSciText text={inst.desc} />
                        </p>
                      </div>
                      {inst.link && (
                        <MonoLink
                          href={inst.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Specs
                        </MonoLink>
                      )}
                    </div>

                    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-theme-neutral-dark relative">
                      <img
                        src={inst.instImg}
                        alt={inst.name}
                        className="w-full h-full object-cover object-center opacity-50 hover:opacity-80 hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-theme-black/80 backdrop-blur px-3 py-1.5 rounded-md border border-theme-neutral-dark flex items-center gap-2">
                        <FileText className="w-3 h-3 text-theme-accent" />
                        <span className="text-xs font-bold text-theme-neutral-light uppercase tracking-wider">
                          Proposals - {inst.proposals.length}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-2">
                      {inst.proposals.map((prop, pIdx) => (
                        <div
                          key={pIdx}
                          className="group bg-theme-neutral-dark/30 hover:bg-theme-neutral-dark/80 border border-theme-neutral-muted/30 hover:border-theme-accent/30 rounded-lg p-5 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                        >
                          <div className="shrink-0 md:w-32 flex flex-col gap-2">
                            <span className="font-mono text-xs text-theme-neutral-muted uppercase tracking-widest">
                              ID: {prop.id}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-theme-accent uppercase tracking-wider">
                              <Clock className="w-3 h-3" /> {prop.awarded}
                            </span>
                          </div>

                          <p className="text-sm text-theme-neutral-light font-light leading-relaxed">
                            <AutoSciText text={prop.desc} />
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
