import React from "react";

const CollaboratorCard = ({ person }) => {
  return (
    <div className="bg-theme-neutral-dark/20 border border-theme-neutral-muted/30 p-5 sm:p-6 rounded-sm hover:border-theme-accent/50 hover:bg-theme-neutral-dark/40 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
      {/* Person Info */}
      <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 flex-grow relative z-10">
        <h3 className="text-lg sm:text-xl text-theme-heading font-heading leading-tight pt-1 break-words">
          {person.name}
        </h3>
      </div>

      {/* Logos Area (Bottom) */}
      <div className="border-t border-theme-accent/20 pt-4 sm:pt-5 flex flex-wrap items-center justify-start gap-4 sm:gap-6 relative z-10 min-h-[50px]">
        {person.institutes.map((inst, idx) => (
          <div
            key={idx}
            className="h-8 sm:h-10 flex items-center justify-center shrink-0"
          >
            <img
              src={inst.logo}
              alt={`${person.name} Institute Logo`}
              className="max-h-full max-w-[100px] sm:max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/100x40/171717/525252?text=Logo";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorCard;
