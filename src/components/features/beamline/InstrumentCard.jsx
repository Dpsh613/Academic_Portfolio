import React from "react";
import { FileText, Clock } from "lucide-react";
import { MonoLink } from "../../ui/Button";
import { StaggerItem } from "../../Layout/AnimatedWrapper";
import AutoSciText from "../../../utils/AutoSciText";

const InstrumentCard = ({ instrument }) => {
  return (
    <StaggerItem className="space-y-6">
      {/* Top Details & Specs Link */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h3 className="text-theme-heading mb-2">
            <AutoSciText text={instrument.name} />
            {}
          </h3>
          <p className="text-theme-neutral-light">
            <AutoSciText text={instrument.desc} />
          </p>
        </div>
        {instrument.link && (
          <MonoLink href={instrument.link} target="_blank" rel="noreferrer">
            View Specs
          </MonoLink>
        )}
      </div>

      {/* Large Image Block */}
      <div className="w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden relative">
        <img
          src={instrument.instImg}
          alt={instrument.name}
          className="w-full h-full object-cover object-center opacity-50 hover:opacity-80 hover:scale-105 transition-all duration-700"
        />
        <div className="absolute top-4 left-4 bg-theme-black/70 backdrop-blur px-3 py-1.5 rounded-md flex items-center gap-2">
          <FileText className="w-3 h-3 text-theme-accent" />
          <span className="text-sm font-bold text-theme-neutral-light uppercase tracking-widest">
            Proposals - {instrument.proposals?.length || 0}
          </span>
        </div>
      </div>

      {/* Proposals List (Horizontal Layout) */}
      <div className="grid grid-cols-1 gap-3 pt-2">
        {instrument.proposals?.map((prop, pIdx) => (
          <div
            key={prop.id || pIdx}
            className="group border border-theme-black hover:border-theme-accent/30 rounded-lg p-5 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
          >
            {/* Proposal ID & Date */}
            <div className="shrink-0 md:w-32 flex flex-col gap-2">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest">
                ID: {prop.id}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-theme-accent uppercase tracking-wider">
                <Clock className="w-3 h-3" /> {prop.awarded}
              </span>
            </div>

            {/* Proposal Desc */}
            <p className="text-sm text-theme-neutral-light font-light leading-relaxed">
              <AutoSciText text={prop.desc} />
            </p>
          </div>
        ))}
      </div>
    </StaggerItem>
  );
};

export default InstrumentCard;
