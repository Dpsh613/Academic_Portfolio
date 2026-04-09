import React from "react";

const FacilityLogo = ({ name, logoUrl }) => {
  return (
    <div className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 w-fit max-w-[160px]">
      {/* Logo */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/90 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
        <img
          src={logoUrl}
          alt={name}
          className="max-h-[70%] max-w-[70%] object-contain"
        />
      </div>

      {/* Name */}
      <span
        className="text-sm font-light text-theme-accent group-hover:text-theme-accet-light transition-colors leading-tight truncate"
        title={name}
      >
        {name}
      </span>
    </div>
  );
};

export default FacilityLogo;
