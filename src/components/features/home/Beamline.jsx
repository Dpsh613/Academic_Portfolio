import { useMemo } from "react";
import SectionWrapper from "../../Layout/SectionWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import { Stagger, FadeUp, StaggerItem } from "../../Layout/AnimatedWrapper";
import { RoundSweep } from "../../ui/Button";
import FacilityLogo from "../../ui/FacilityLogo";
import { beamlineData } from "../../../constants/beamlineData";

const Beamline = () => {
  const metrics = useMemo(() => {
    let totalFacilities = beamlineData.length;
    let totalProposals = 0;
    let totalDays = 0;

    beamlineData.forEach((facility) => {
      facility.instruments?.forEach((instrument) => {
        instrument.proposals?.forEach((proposal) => {
          totalProposals++;
          const days = parseFloat(proposal.awarded);
          if (!isNaN(days)) {
            totalDays += days;
          }
        });
      });
    });

    return [
      {
        value: totalFacilities.toString(),
        label: "Major Facilities",
        sub: "Across Europe and Asia",
      },
      {
        value: totalProposals.toString(),
        label: "Accepted Proposals",
        sub: "Highly competitive access",
      },
      {
        value: `${totalDays}+`,
        label: "Days Awarded",
        sub: "Total allocated beamtime",
      },
    ];
  }, []);

  return (
    //wrappping the whole sections, heandling padding margin and alignment.
    <SectionWrapper id="beamline">
      <SectionHeader title="Beamline Access" />
      {/* replacing motion.div */}
      <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric, idx) => (
          <StaggerItem
            key={idx}
            className="group relative flex flex-col items-center justify-center text-center bg-theme-neutral-dark border border-theme-accent p-8 rounded-2xl hover:-translate-y-1 hover:border-theme-accent hover:shadow-[0_10px_40px_-10px_rgba(240,177,0,0.15)] transition-all duration-500"
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
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp className="flex flex-col lg:flex-row items-center justify-between bg-theme-neutral-dark/20 rounded-2xl p-6 md:p-8 border border-theme-accent/40 gap-8 hover:border-theme-accent/60 transition-colors duration-500">
        {/* Facilities Logos */}
        <div className="flex-1 w-full">
          <h4 className="tracking-widest mb-6 text-center lg:text-left text-secondary">
            Facilities
          </h4>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
            {beamlineData.map((item, idx) => (
              <FacilityLogo key={idx} name={item.acronym} logoUrl={item.logo} />
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="shrink-0 flex justify-center mt-4 lg:mt-0">
          <RoundSweep to="/beamline">View Full Records</RoundSweep>
        </div>
      </FadeUp>
    </SectionWrapper>
  );
};

export default Beamline;
