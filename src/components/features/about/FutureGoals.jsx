import React from "react";
import { FadeUp } from "../../Layout/AnimatedWrapper";
import { MonoLink } from "../../ui/Button";

const FutureGoals = ({ data }) => {
  return (
    <FadeUp className="mt-12 bg-gradient-to-r from-theme-accent/10 to-transparent border border-theme-accent/30 p-8 rounded-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-theme-accent"></div>
      <h2 className="text-2xl text-theme-heading mb-4">{data.title}</h2>
      <p className="text-theme-neutral-light mb-6">{data.desc}</p>

      <MonoLink href={data.ctaLink || "mailto:your-email@example.com"}>
        <span className="flex items-center gap-2">{data.ctaText}</span>
      </MonoLink>
    </FadeUp>
  );
};

export default FutureGoals;
