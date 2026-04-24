import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import staggerContainer from "../../animation/staggerContainer";
import { RoundSweep } from "../ui/Button";
import FacilityLogo from "../ui/FacilityLogo";
import { beamlineData } from "../../constants/beamlineData";

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

  return (
    <section
      id="beamline"
      className="relative w-full overflow-hidden py-20 mt-[-5rem] px-8 md:px-16 bg-theme-black"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h2 className="text-theme-heading mb-2">Beamline Access</h2>
        <div className="w-24 h-0.5 bg-theme-accent mt-6"></div>
      </motion.div>
      <div className="max-w-7xl mx-auto w-full">
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
                className="group relative flex flex-col items-center justify-center text-center bg-theme-neutral-dark/30 border border-theme-accent/30 p-8 rounded-2xl hover:-translate-y-1 hover:border-theme-accent hover:shadow-[0_10px_40px_-10px_rgba(240,177,0,0.15)] transition-all duration-500"
              >
                <h3 className="text-secondary font-mono mb-2 group-hover:text-theme-accent transition-colors">
                  {metric.value}
                </h3>
                <p className="text-lg font-semibold text-theme-neutral-light tracking-wide mb-1">
                  {metric.label}
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-theme-neutral-light group-hover:text-secondary transition-colors">
                  {metric.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section: Facilities List & CTA Button */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row items-center justify-between bg-theme-neutral-dark/20 rounded-2xl p-6 md:p-8 border border-theme-accent/40 gap-8 hover:border-theme-accent/60 transition-colors duration-500"
          >
            {/* Facilities Logos */}
            <div className="flex-1 w-full">
              <h4 className="tracking-widest mb-6 text-center lg:text-left">
                Facilities
              </h4>

              {/* Flex-wrap container handles unlimited logos beautifully */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                {beamlineData.map((item, idx) => (
                  <FacilityLogo
                    key={idx}
                    name={item.acronym}
                    logoUrl={item.logo}
                  />
                ))}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="shrink-0 flex justify-center mt-4 lg:mt-0">
              <RoundSweep to="beamline">View Full Records</RoundSweep>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeamlineSummary;
