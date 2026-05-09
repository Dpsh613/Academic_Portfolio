import React from "react";
import SectionHeader from "../../Layout/SectionHeader";
import { FadeUp, Stagger, StaggerItem } from "../../Layout/AnimatedWrapper";

const SoftwareGrid = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="pt-10 md:pt-16 border-t border-theme-neutral-muted/20">
      <SectionHeader title="Softwares" />

      <FadeUp className="mb-8 md:mb-12">
        <p className="text-theme-neutral-light font-light max-w-3xl text-sm md:text-base lg:text-lg m-0">
          Proficiency in advanced data reduction, visualization, and theoretical
          modeling tools essential for modern experimental condensed matter
          physics.
        </p>
      </FadeUp>

      <Stagger className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 md:gap-6">
        {data.map((software) => (
          <StaggerItem key={software.name}>
            <div className="bg-theme-neutral-dark/20 border border-theme-neutral-muted/20 rounded-sm p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 md:gap-4 hover:border-theme-accent/50 hover:bg-[#0a0a0a] transition-all duration-300 group h-28 md:h-32 shadow-sm hover:shadow-[0_0_15px_rgba(250,250,51,0.1)]">
              {/* Note: changed software.logoUrl to software.logo based on new data */}
              {software.logo ? (
                <img
                  src={software.logo}
                  alt={`${software.name} logo`}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-all duration-300"
                />
              ) : (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-theme-neutral-muted/30 flex items-center justify-center bg-theme-black group-hover:border-theme-accent transition-colors duration-300">
                  <span className="text-theme-neutral-muted group-hover:text-theme-accent text-xs md:text-sm font-mono tracking-widest font-bold transition-colors duration-300">
                    {software.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <span className="text-[10px] md:text-xs text-theme-accent group-hover:text-theme-heading transition-colors tracking-wide">
                {software.name}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
};

export default SoftwareGrid;
