import React from "react";
import { BookOpen } from "lucide-react";
import { FadeUp } from "../../Layout/AnimatedWrapper";

const ThesisCallout = ({ data }) => {
  return (
    <FadeUp margin="-50px">
      <div className="bg-theme-neutral-dark/40 border-l-4 border-theme-accent p-6 my-10">
        <div className="flex gap-4 items-start">
          <BookOpen className="w-6 h-6 text-theme-accent shrink-0" />
          <div>
            <h4 className="text-theme-neutral-light text-xs tracking-widest mb-2 uppercase font-mono">
              {data.label}
            </h4>
            <p className="text-theme-heading font-serif text-lg italic leading-relaxed m-0">
              {data.title}
            </p>
          </div>
        </div>
      </div>
    </FadeUp>
  );
};

export default ThesisCallout;
