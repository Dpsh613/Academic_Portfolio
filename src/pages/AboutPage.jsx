import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import { MonoLink } from "../components/ui/Button"; // Update path if needed
import heroImage from "../assets/images/heroImage.jpg";

import {
  Mail,
  Phone,
  MapPin,
  Building2,
  GraduationCap,
  Globe2,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative"
    >
      {/* --- 1. HERO SECTION --- */}
      <div className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Overlay using your img1 */}
        <div className="absolute inset-0 bg-[url('./assets/images/img3.jpg')] bg-cover bg-center z-0" />
        <div className="absolute inset-0 bg-theme-black/80 z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-8"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-px bg-theme-accent"></span>
                <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold">
                  About The Researcher
                </span>
              </motion.div>

              <motion.h1 variants={fadeUpVariant} className="leading-tight">
                Arnab Kanti <br />
                <span className="text-secondary font-bold">Jana</span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-8 text-theme-neutral-light max-w-2xl border-l-2 border-theme-neutral-dark pl-4"
              >
                Experimental condensed matter physicist bridging the gap between
                macroscopic observations and their microscopic origins in
                strongly correlated electron systems.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Sticky Profile Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="lg:col-span-4 lg:sticky lg:top-32 space-y-8"
          >
            {/* Portrait Image Placeholder (Unsplash Academic looking image) */}
            <div className="w-full aspect-[3/4] bg-neutral-900 rounded-sm overflow-hidden border border-theme-neutral-dark grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={heroImage}
                alt="Arnab Kanti Jana"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Contact & Info Card */}
            <div className="bg-theme-neutral-dark/20 border border-theme-neutral-muted/30 p-6 rounded-sm space-y-6">
              <div>
                <h3 className="text-theme-heading text-xl mb-1">
                  Arnab Kanti Jana
                </h3>
                <p className="text-secondary text-sm font-mono tracking-wider uppercase">
                  Doctoral Researcher
                </p>
              </div>

              <div className="space-y-4 text-sm text-theme-neutral-light">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <p>Department of Physics, RKMVERI</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <p>Belur Math, Howrah, West Bengal 711202, India</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-theme-accent shrink-0" />
                  <a
                    href="mailto:akj.chs2014@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    akj.chs2014@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-theme-accent shrink-0" />
                  <p>(+91) 9734490372</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Biography & Additional Components */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-8 space-y-16"
          >
            {/* The Bio Sections */}
            <div className="space-y-8 text-secondary">
              <motion.div variants={fadeUpVariant}>
                <h2 className="text-theme-heading mb-4">The Motivation</h2>
                <p>
                  I am an experimental condensed matter physicist, currently
                  awaiting the defense of my Ph.D. at the Ramakrishna Mission
                  Vivekananda Educational and Research Institute (RKMVERI),
                  India. My primary research motivation is to explore the
                  fundamental physics of strongly correlated electron systems,
                  where the delicate interplay between spin, charge, and lattice
                  degrees of freedom gives rise to exotic quantum phenomena.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <h2 className="text-theme-heading mb-4 mt-12">
                  The Methodology
                </h2>
                <p>
                  Specifically, I investigate the fundamental questions
                  surrounding the origin of magnetism, spin dynamics, and the
                  nature of unconventional ground states in low-dimensional
                  materials. My focus lies heavily on systems exhibiting
                  geometric and bond-dependent magnetic frustration. I believe a
                  complete physical picture requires bridging the gap between
                  macroscopic observations and their microscopic origins.
                </p>
                <p className="mt-4">
                  Therefore, my work integrates the synthesis of new solid-state
                  materials with a multi-pronged characterization strategy.
                  Starting with establishing bulk thermodynamic and transport
                  properties in the lab, I utilize powerful microscopic probes
                  such as neutron scattering, muon spin rotation and relaxation
                  (μSR), and synchrotron X-rays at leading international
                  facilities to probe the spin and structural behaviors
                  directly.
                </p>
              </motion.div>

              {/* Thesis Callout Box */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-theme-neutral-dark/40 border-l-4 border-theme-accent p-6 my-10"
              >
                <div className="flex gap-4 items-start">
                  <BookOpen className="w-6 h-6 text-theme-accent shrink-0" />
                  <div>
                    <h4 className="text-theme-neutral-light text-xs tracking-widest mb-2">
                      Doctoral Thesis
                    </h4>
                    <p className="text-theme-heading font-serif text-lg italic leading-relaxed m-0">
                      "Interplay of Electron Correlation and Spin-Orbit Coupling
                      in the Honeycomb Layered Oxides Na₃M₂SbO₆ (M = Cu and Co)"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* DUMMY COMPONENT 1: Global Footprint */}
            <motion.div
              variants={fadeUpVariant}
              className="pt-8 border-t border-theme-neutral-dark"
            >
              <h2 className="text-theme-heading mb-6 flex items-center gap-3">
                <Globe2 className="w-6 h-6 text-theme-accent" />
                Global Collaborations & Facilities
              </h2>
              <p className="mb-6 text-theme-neutral-light ">
                To gain a deeper understanding of the underlying mechanisms of
                these quantum phenomena, I frequently collaborate with leading
                large-scale international facilities:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "ISIS (UK)",
                  "PSI (Switzerland)",
                  "DESY (Germany)",
                  "J-PARC (Japan)",
                  "RRCAT (India)",
                ].map((facility, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 border border-theme-neutral-muted/40 rounded-full text-sm text-theme-accent bg-white/5 hover:border-theme-accent transition-colors"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* DUMMY COMPONENT 2: Education Timeline */}
            <motion.div
              variants={fadeUpVariant}
              className="pt-8 border-t border-theme-neutral-dark"
            >
              <h2 className="text-theme-heading mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-theme-accent" />
                Academic Journey
              </h2>
              <div className="space-y-8 border-l border-theme-neutral-dark ml-3 pl-8 relative">
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-theme-accent rounded-full -left-[38px] top-1.5 shadow-[0_0_10px_rgba(250,250,51,0.5)]"></div>
                  <span className="font-mono text-theme-accent text-xs tracking-widest uppercase mb-1 block">
                    2020 — Present
                  </span>
                  <h3 className="text-xl text-theme-heading mb-1">
                    Ph.D. in Physics
                  </h3>
                  <p className="text-sm text-secondary">
                    Ramakrishna Mission Vivekananda Educational and Research
                    Institute (RKMVERI)
                  </p>
                </div>
                {/* Timeline Item 2 (Dummy) */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-theme-neutral-muted rounded-full -left-[38px] top-1.5"></div>
                  <span className="font-mono text-theme-accent text-xs tracking-widest uppercase mb-1 block">
                    2018 — 2020
                  </span>
                  <h3 className="text-xl text-theme-heading mb-1">
                    M.Sc. in Physics
                  </h3>
                  <p className="text-sm text-secondary">
                    Prabhat Kumar College, India.
                  </p>
                </div>
                {/* Timeline Item 3 (Dummy) */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-theme-neutral-muted rounded-full -left-[38px] top-1.5"></div>
                  <span className="font-mono text-theme-accent text-xs tracking-widest uppercase mb-1 block">
                    2015 — 2018
                  </span>
                  <h3 className="text-xl text-theme-heading mb-1">
                    B.Sc. in Physics
                  </h3>
                  <p className="text-sm text-secondary">
                    Prabhat Kumar College, India.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* DUMMY COMPONENT 3: Looking Forward (Postdoc Search) */}
            <motion.div
              variants={fadeUpVariant}
              className="mt-12 bg-gradient-to-r from-theme-accent/10 to-transparent border border-theme-accent/30 p-8 rounded-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-theme-accent"></div>
              <h2 className="text-2xl text-theme-heading mb-4">
                Looking Forward
              </h2>
              <p className="text-theme-neutral-light mb-6">
                As I prepare for the next stage of my career as a postdoctoral
                researcher, I am excited to explore new frontiers, such as the
                interplay of topology and magnetism, pressure-induced quantum
                phase transitions, or novel families of QSLs. I am actively
                seeking opportunities to join a collaborative team where I can
                contribute my expertise and grow as a researcher.
              </p>
              <MonoLink href="mailto:akj.chs2014@gmail.com">
                <span className="flex items-center gap-2">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </span>
              </MonoLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
