import React from "react";
import SectionHeader from "../../Layout/SectionHeader";
import { Stagger, StaggerItem } from "../../Layout/AnimatedWrapper";
import CollaboratorCard from "./CollaboratorCard";

const CollaboratorRegion = ({
  icon: Icon,
  title,
  collaborators,
  className = "",
}) => {
  // If there are no collaborators for this region, don't render anything
  if (!collaborators || collaborators.length === 0) return null;

  // We pass a React Node to SectionHeader to keep your specific styling and icons
  const headerTitle = (
    <div className="flex items-center gap-3 md:gap-4 text-theme-heading">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-theme-accent shrink-0" />
      <span>
        {title} <span className="text-secondary font-bold">Collaborators</span>
      </span>
    </div>
  );

  return (
    <div className={className}>
      <SectionHeader title={headerTitle} />

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collaborators.map((person) => (
          <StaggerItem key={person.id} className="h-full">
            <CollaboratorCard person={person} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
};

export default CollaboratorRegion;
