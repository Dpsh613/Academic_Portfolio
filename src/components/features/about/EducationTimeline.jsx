import React from "react";
import { GraduationCap } from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "../../Layout/AnimatedWrapper";

const EducationTimeline = ({ data }) => {
  return (
    <FadeUp className="pt-8 border-t border-theme-neutral-dark">
      <h2 className="text-theme-heading mb-8 flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-theme-accent" />
        Academic Journey
      </h2>

      <Stagger className="space-y-8 border-l border-theme-neutral-dark ml-3 pl-8 relative">
        {data.map((item) => (
          <StaggerItem key={item.id} className="relative">
            {/* Timeline Dot */}
            <div
              className={`absolute w-3 h-3 rounded-full -left-[38px] top-1.5 ${
                item.isActive
                  ? "bg-theme-accent shadow-[0_0_10px_rgba(250,250,51,0.5)]"
                  : "bg-theme-neutral-muted"
              }`}
            />
            <span className="font-mono text-theme-accent text-xs tracking-widest uppercase mb-1 block">
              {item.period}
            </span>
            <h3 className="text-xl text-theme-heading mb-1">{item.degree}</h3>
            <p className="text-sm text-secondary">{item.institute}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </FadeUp>
  );
};

export default EducationTimeline;
