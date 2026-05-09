import React from "react";
import { FadeUp, Stagger, StaggerItem } from "../../Layout/AnimatedWrapper";
import PublicationCard from "./PublicationCard";

const PublicationYearGroup = ({ year, publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <div className="mb-32 last:mb-0">
      {/* Year Separator */}
      <FadeUp className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-theme-accent">
          {year}
        </h2>
        <div className="h-px bg-theme-accent/30 flex-grow"></div>
      </FadeUp>

      {/* Publications List for this Year */}
      <Stagger className="space-y-24">
        {publications.map((pub) => (
          <StaggerItem key={pub.id} margin="-100px">
            <PublicationCard pub={pub} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
};

export default PublicationYearGroup;
