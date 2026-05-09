import React from "react";
import { MapPin } from "lucide-react";
import { MonoLink } from "../../ui/Button";
import SectionWrapper from "../../Layout/SectionWrapper";
import SectionHeader from "../../Layout/SectionHeader";
import { FadeUp, Stagger } from "../../Layout/AnimatedWrapper";
import InstrumentCard from "./InstrumentCard";

const FacilitySection = ({ facility }) => {
  return (
    <SectionWrapper className="border-b border-theme-neutral-muted/20 last:border-none">
      <SectionHeader title={`${facility.acronym} Instruments Overview`} />

      {/* FIX: Added `items-stretch` so the left column takes the exact height of the right column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-12 items-stretch">
        {/* LEFT COLUMN: Added `h-full relative` so the column is a full-height track for the sticky element */}
        <div className="lg:col-span-4 h-full relative">
          {/* FIX: The sticky element now has room to slide down the h-full container */}
          <div className="sticky top-20 w-full self-start pb-8">
            <FadeUp className="space-y-8">
              {/* Facility Image Block */}
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <img
                  src={facility.facilityImg || facility.bgImg}
                  alt="facility background"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-black to-transparent"></div>

                {facility.logo && (
                  <div className="absolute bottom-2 left-2 w-20 h-18 p-3">
                    <img
                      src={facility.logo}
                      alt={`${facility.acronym} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Facility Details */}
              <div>
                <h2 className="text-theme-heading text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {facility.facility}
                </h2>
                <div className="flex items-center gap-2 text-theme-accent font-body text-sm tracking-widest uppercase mb-2">
                  <MapPin className="w-4 h-4" />
                  {facility.location}
                </div>
                <p className="text-theme-neutral-light leading-relaxed font-light mb-4">
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
            </FadeUp>
          </div>
        </div>

        {/* RIGHT COLUMN: Ensure right side is also a full height block */}
        <div className="lg:col-span-8 h-full">
          <Stagger className="space-y-16 lg:space-y-24">
            {facility.instruments.map((inst, iIdx) => (
              <InstrumentCard key={iIdx} instrument={inst} />
            ))}
          </Stagger>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FacilitySection;
