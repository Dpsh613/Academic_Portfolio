import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import { pubData } from "../constants/publicationsData";
import { MonoLink } from "../components/ui/Button"; // Ensure correct path
import { BookOpen, Users, ExternalLink } from "lucide-react";
import AutoSciText from "../utils/AutoSciText"; // Ensure correct path

const PublicationsPage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-theme-black min-h-screen relative"
    >
      {/* --- 1. HERO SECTION --- */}
      {/* FIXED: Added 'min-h-screen flex items-center' to force 100vh height */}
      <div className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('./assets/images/img3.jpg')] bg-cover bg-center z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-theme-black/60 via-theme-black/90 to-theme-black z-0" />

        {/* Added w-full to ensure it spans correctly inside the flex container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content - Takes up 8 columns to let text breathe */}
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
                  Scientific Output
                </span>
              </motion.div>

              <motion.h1 variants={fadeUpVariant}>
                Peer-Reviewed <br />
                <span className="text-secondary font-bold">Publications</span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-8 text-theme-neutral-light max-w-2xl border-l-2 border-theme-neutral-dark pl-4"
              >
                A comprehensive archive of research contributing to the
                understanding of strongly correlated electron systems,
                magnetism, and unconventional superconducting states. Published
                in leading high-impact international journals.
              </motion.p>
            </motion.div>

            {/* Right side left intentionally blank for future use or minimalist balance */}
            <div className="lg:col-span-4"></div>
          </div>
        </div>
      </div>

      {/* --- 2. PUBLICATIONS LIST SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-32 relative z-10 pb-32">
        {pubData.map((pub, idx) => (
          <motion.div
            key={pub.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Left Column: Metadata & Text */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Journal Tag */}
              <div className="flex items-center gap-3 border-b border-theme-neutral-dark pb-4">
                <BookOpen className="w-5 h-5 text-theme-accent" />
                <span className="font-mono text-sm text-theme-accent tracking-widest uppercase">
                  {pub.tag}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-theme-heading leading-tight">{pub.title}</h2>

              {/* Authors Box */}
              <div className="bg-theme-neutral-dark/30 border border-theme-neutral-muted/30 p-5 rounded-sm flex items-start gap-4">
                <Users className="w-5 h-5 text-theme-neutral-muted shrink-0 mt-0.5" />
                <p className="text-theme-neutral-light">
                  {pub.authors.map((author, i) => (
                    <span key={i}>
                      {author.includes("A. Jana") ? (
                        <span className="text-secondary font-semibold">
                          {author}
                        </span>
                      ) : (
                        author
                      )}
                      {i < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>

              {/* Abstract / Description */}
              <div className="space-y-6">
                <h4 className="text-theme-neutral-muted">Key Findings</h4>
                <div className="space-y-4">
                  {pub.desc.map((point, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-theme-accent shrink-0 mt-2.5"></div>
                      <p className="text-theme-neutral-light">
                        <AutoSciText text={point} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <MonoLink href={pub.link} target="_blank" rel="noreferrer">
                  <span className="flex items-center gap-2">
                    Read Full Article <ExternalLink className="w-4 h-4" />
                  </span>
                </MonoLink>
              </div>
            </div>

            {/* Right Column: Dedicated Graph Space */}
            <div className="lg:col-span-5 relative">
              {/* Sticky graph so it follows as you read */}
              <div className="sticky top-32 bg-white/5 border border-theme-neutral-muted/30 rounded-sm p-6 flex flex-col gap-4">
                {/* Graph Label */}
                <h4 className="text-center text-theme-neutral-light tracking-[0.2em] text-xs">
                  {pub.imgLabel}
                </h4>

                {/* Graph Image - uses object-contain so nothing is cropped */}
                <div className="w-full bg-white rounded-sm p-2">
                  <img
                    src={pub.img}
                    alt={`Graph for ${pub.imgLabel}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PublicationsPage;
