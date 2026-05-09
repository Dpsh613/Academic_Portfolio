import React from "react";
import { Globe2 } from "lucide-react";
import { FadeUp } from "../../Layout/AnimatedWrapper";

const GlobalFootprint = ({ data }) => {
  return (
    <FadeUp className="pt-8 border-t border-theme-neutral-dark">
      <h2 className="text-theme-heading mb-6 flex items-center gap-3">
        <Globe2 className="w-6 h-6 text-theme-accent" />
        {data.title}
      </h2>
      <p className="mb-6 text-theme-neutral-light">{data.desc}</p>
      <div className="flex flex-wrap gap-3">
        {data.facilities.map((facility, idx) => (
          <span
            key={idx}
            className="px-4 py-2 border border-theme-neutral-muted/40 rounded-full text-sm text-theme-accent bg-white/5 hover:border-theme-accent transition-colors"
          >
            {facility}
          </span>
        ))}
      </div>
    </FadeUp>
  );
};

export default GlobalFootprint;
