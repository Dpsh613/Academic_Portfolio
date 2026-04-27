import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
import pageTransition from "../animation/pageTransition";
import { pubData } from "../constants/publicationsData";
import { SecondaryBorder } from "../components/ui/Button";
import { BookOpen, Users } from "lucide-react";
import AutoSciText from "../utils/AutoSciText";
import AtomicJourney from "../components/ui/AtomicJourney";

// FUTURE-PROOFING: Automatically groups and sorts publications by year dynamically.
const groupedPublications = pubData.reduce((acc, pub) => {
  if (!acc[pub.year]) acc[pub.year] = [];
  acc[pub.year].push(pub);
  return acc;
}, {});

// Sort years descending (Newest first)
const sortedYears = Object.keys(groupedPublications).sort((a, b) => b - a);

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
      {/* Strict 100vh layout, no bottom border */}
      <div className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/images/img3.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-theme-black/90 z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7"
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

              <motion.h1 variants={fadeUpVariant} className="mb-4">
                Peer-Reviewed <br />
                <span className="text-secondary font-bold">Publications</span>
              </motion.h1>
            </motion.div>

            {/* Right Content: Dynamic Atomic Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center"
            >
              {/* Injecting our smart component here */}
              <AtomicJourney />
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- 2. DYNAMIC PUBLICATIONS LIST SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 pb-32">
        {sortedYears.map((year) => (
          <div key={year} className="mb-32 last:mb-0">
            {/* Year Separator */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="flex items-center gap-6 mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-theme-accent">
                {year}
              </h2>
              <div className="h-px bg-theme-accent/30 flex-grow"></div>
            </motion.div>

            {/* Publications for this Year */}
            <div className="space-y-24">
              {groupedPublications[year].map((pub) => (
                <motion.div
                  key={pub.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUpVariant}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Left Column: Metadata & Text */}
                  <div className="lg:col-span-7 flex flex-col gap-8">
                    {/* Title */}
                    <h2 className="text-theme-heading">
                      <AutoSciText text={pub.title} />
                    </h2>

                    {/* Meta Tags (Journal, Vol, Page) */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm">
                      <div className="flex items-center gap-2 text-theme-accent">
                        <BookOpen className="w-4 h-4" />
                        <span className="uppercase tracking-wider">
                          {pub.tag}
                        </span>
                      </div>
                      <span className="text-theme-accent md:block">|</span>
                      <span className="text-secondary">Vol: {pub.volume}</span>
                      <span className="text-theme-accent">|</span>
                      <span className="text-secondary">Page: {pub.pageNo}</span>
                    </div>

                    {/* Authors Box */}
                    <div className="border-b border-theme-accent p-5 rounded-sm flex items-start gap-4">
                      <Users className="w-5 h-5 text-theme-neutral-light shrink-0 mt-0.5" />
                      <p className="text-theme-neutral-light leading-relaxed">
                        {pub.authors.map((author, i) => {
                          const isHighlighted = author.includes("Jana");
                          return (
                            <span
                              key={i}
                              className={
                                isHighlighted ? "text-secondary font-bold" : ""
                              }
                            >
                              {author}
                              {i < pub.authors.length - 1 ? ", " : ""}
                            </span>
                          );
                        })}
                      </p>
                    </div>

                    {/* Action Button using your SecondaryBorder component */}
                    <div className="pt-2">
                      <SecondaryBorder href={pub.link}>
                        Read Full Paper
                      </SecondaryBorder>
                    </div>
                  </div>

                  {/* Right Column: Figure / Graph Area */}
                  {/* <div className="lg:col-span-5 relative">
                    <div className="p-4 rounded-sm">
                      <div className="w-full rounded-sm p-4 flex items-center justify-center">
                        <img
                          src={pub.img}
                          alt={`Graph for ${pub.imgLabel}`}
                          className="w-full max-h-[350px] object-contain"
                        />
                      </div>
                      <p className="text-center text-theme-neutral-muted tracking-tight leading-tight text-xs mt-4 uppercase">
                        Fig: <AutoSciText text={pub.imgLabel} />
                      </p>
                    </div>
                  </div> */}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default PublicationsPage;
