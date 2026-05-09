import React from "react";
import { FadeUp } from "../../Layout/AnimatedWrapper";

const BiographySection = ({ data }) => {
  return (
    <div className="space-y-8">
      {data.map((section, idx) => (
        <FadeUp key={section.id} margin="-50px">
          <h2 className={`text-theme-heading mb-4 ${idx !== 0 ? "mt-12" : ""}`}>
            {section.title}
          </h2>
          <div className="space-y-4">
            {section.desc.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeUp>
      ))}
    </div>
  );
};

export default BiographySection;
