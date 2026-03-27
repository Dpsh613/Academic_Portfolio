import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant.js";
import staggerContainer from "../animation/staggerContainer.js";

const awardsData = [
  {
    year: "2021 – 2026",
    title: "DST-INSPIRE Fellowship",
    organization: "Department of Science and Technology (DST), Govt. of India",
    description:
      "5-year national fellowship for doctoral research. Awarded as Senior Research Fellow (SRF) from 2024–2026 and Junior Research Fellow (JRF) from 2021–2023.",
    type: "National Fellowship",
  },
  {
    year: "2023",
    title: "DST-DESY International Travel Grant",
    organization: "JNCASR, India",
    description:
      "Full financial support awarded to conduct synchrotron experiments at PETRA III, DESY, Germany (Proposal IDs: I-20220336 & I-20220829).",
    type: "International Grant",
  },
  {
    year: "2018",
    title: "Gold Plated Medal (1st Position)",
    organization: "Prabhat Kumar College, India",
    description:
      "Awarded for securing the highest academic standing in the graduating class for B.Sc. Physics.",
    type: "Academic Excellence",
  },
  {
    year: "2015",
    title: "DST-INSPIRE Scholarship for Higher Education (SHE)",
    organization: "Department of Science and Technology (DST), Govt. of India",
    description:
      "National scholarship awarded for pursuing higher education in basic sciences based on top-tier academic performance.",
    type: "National Scholarship",
  },
  {
    year: "2012",
    title: "First Prize, District Level Science Fair",
    organization: "Digha Science Centre & National Science Camp, India",
    description:
      "Recognized for innovation and scientific temperament at the regional level.",
    type: "Science Award",
  },
];

const Awards = () => {
  return (
    <section
      id="awards"
      className="relative min-h-[400px] w-full overflow-hidden py-24 px-8 md:px-16 bg-white"
    >
      {/* Header - Aligned with Research.jsx */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16 max-w-7xl mx-auto"
      >
        <h3 className="font-heading text-4xl font-medium tracking-tight text-stone-900">
          Awards & Honors
        </h3>
        <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
      </motion.div>

      {/* Awards Timeline Container */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative ml-4 border-l-2 border-stone-100 flex flex-col gap-12"
        >
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="relative pl-10 group"
            >
              {/* The Yellow Dot Highlighter */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.4)] group-hover:bg-yellow-400 transition-colors duration-300"></div>

              {/* Award Content */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                {/* Year Side - Fixed width for alignment */}
                <div className="md:w-32 shrink-0">
                  <span className="text-sm font-bold text-yellow-600 tracking-tighter uppercase italic">
                    {award.year}
                  </span>
                </div>

                {/* Info Side */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="font-heading text-xl font-bold text-stone-900 leading-tight">
                      {award.title}
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-stone-100 text-stone-500 rounded border border-stone-200">
                      {award.type}
                    </span>
                  </div>

                  <p className="text-stone-800 font-medium text-sm mb-2">
                    {award.organization}
                  </p>

                  <p className="text-stone-500 text-sm leading-relaxed font-light max-w-3xl">
                    {award.description}
                  </p>
                </div>
              </div>

              {/* Subtle divider for mobile */}
              <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-stone-100 to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
