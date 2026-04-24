import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant.js";
import staggerContainer from "../../animation/staggerContainer.js";
import awardsData from "../../constants/awardsData.js";

const Awards = () => {
  return (
    <section
      id="awards"
      className="relative min-h-[400px] w-full overflow-hidden py-20 px-8 md:px-16 bg-theme-black"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h2 className="text-theme-heading">Awards & Honors</h2>
        <div className="w-24 h-0.5 bg-theme-accent mt-6"></div>
      </motion.div>

      {/* Awards Timeline Container */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative ml-4 border-l-2 border-theme-neutral-dark flex flex-col gap-8"
        >
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="relative pl-10 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-theme-black border-2 border-theme-accent/80 shadow-[0_0_10px_rgba(240,177,0,0.1)] group-hover:bg-theme-accent group-hover:border-theme-accent group-hover:shadow-[0_0_15px_rgba(240,177,0,0.3)] transition-all duration-300"></div>

              {/* Award Content */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <div className="md:w-32 shrink-0">
                  <span className="text-sm font-mono font-bold text-secondary tracking-widest">
                    {award.year}
                  </span>
                </div>

                {/* Info Side */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-theme-heading tracking-wider font-light leading-snug m-0">
                      {award.title}
                    </h3>
                    {/* Badge updated to dark mode styling */}
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-theme-black text-secondary rounded border border-theme-accent">
                      {award.type}
                    </span>
                  </div>

                  {/* Organization name slightly prominent */}
                  <p className="text-theme-accent font-medium text-sm mb-2">
                    {award.organization}
                  </p>

                  {/* Description using your muted text variable */}
                  <p className="text-theme-neutral-light text-sm max-w-3xl m-0">
                    {award.description}
                  </p>
                </div>
              </div>

              {/* Subtle divider for mobile - Reduced top margin to match the gap-8 parent spacing */}
              <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-theme-neutral-dark to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
