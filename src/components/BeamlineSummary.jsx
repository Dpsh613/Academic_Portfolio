import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you use react-router for your separate page
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";

const BeamlineSummary = () => {
  const metrics = [
    {
      value: "5",
      label: "Major Facilities",
      sub: "Across Europe and Asia",
    },
    {
      value: "14",
      label: "Accepted Proposals",
      sub: "Highly competitive access",
    },
    {
      value: "34",
      label: "Days Awarded",
      sub: "Total allocated beamtime",
    },
  ];

  const facilities = [
    "ISIS (UK)",
    "PSI (Switzerland)",
    "DESY (Germany)",
    "J-PARC (Japan)",
    "RRCAT (India)",
  ];

  return (
    <section
      id="beamline"
      className="relative w-full overflow-hidden py-24 px-8 md:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <h3 className="font-heading text-4xl font-medium tracking-tight text-stone-900 mb-2">
            Beamline Access
          </h3>
          <p className="text-yellow-500 tracking-wider text-lg font-light">
            Global Large-Scale Facility Experience
          </p>
          <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                className="group relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-stone-50 via-white to-yellow-50/30 border border-yellow-400 p-8 rounded-2xl hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-[0_10px_40px_-10px_rgba(250,204,21,0.15)] transition-all duration-500"
              >

                <h4 className="font-heading text-5xl font-bold text-stone-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {metric.value}
                </h4>
                <p className="text-lg font-semibold text-stone-800 tracking-wide mb-1">
                  {metric.label}
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-yellow-500">
                  {metric.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section: Facilities List & CTA Button */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row items-center justify-between bg-stone-50 rounded-2xl p-8 border border-yellow-500 gap-8"
          >
            {/* Facilities Tags */}
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-4 text-center lg:text-left">
                Facilities
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {facilities.map((fac, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white border border-stone-200 text-yellow-800 text-sm font-medium rounded-full shadow-sm"
                  >
                    {fac}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="shrink-0 flex justify-center">
              <Link
                to="/beamline" // UPDATE THIS TO YOUR ACTUAL ROUTE
                className="group relative inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-medium tracking-wide overflow-hidden hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all duration-300"
              >
                {/* Hover effect background sweep */}
                <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>

                <span className="relative z-10 group-hover:text-stone-900 transition-colors duration-300">
                  View Full Records
                </span>

                {/* Arrow Icon */}
                <svg
                  className="w-4 h-4 relative z-10 group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeamlineSummary;
