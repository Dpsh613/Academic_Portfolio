import React from "react";
import { BookOpen, Users } from "lucide-react";
import { HeroPrimary } from "../../ui/Button";
import AutoSciText from "../../../utils/AutoSciText";

const PublicationCard = ({ pub }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left Column: Metadata & Text */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        {/* Title */}
        <h3 className="text-theme-heading text-2xl md:text-3xl leading-tight">
          <AutoSciText text={pub.title} />
        </h3>

        {/* Meta Tags (Journal, Vol, Page) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm">
          <div className="flex items-center gap-2 text-theme-accent">
            <BookOpen className="w-4 h-4" />
            <span className="uppercase tracking-wider">{pub.tag}</span>
          </div>
          <span className="text-theme-accent hidden md:block">|</span>
          <span className="text-secondary">Vol: {pub.volume}</span>
          <span className="text-theme-accent">|</span>
          <span className="text-secondary">Page: {pub.pageNo}</span>
        </div>

        {/* Authors Box */}
        <div className="border-b border-theme-accent pb-5 rounded-sm flex items-start gap-4">
          <Users className="w-5 h-5 text-theme-neutral-light shrink-0 mt-0.5" />
          <p className="text-theme-neutral-light leading-relaxed">
            {pub.authors.map((author, i) => {
              const isHighlighted = author.includes("Jana");
              return (
                <span
                  key={i}
                  className={isHighlighted ? "text-secondary font-bold" : ""}
                >
                  {author}
                  {i < pub.authors.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex justify-center md:justify-start w-full">
          <HeroPrimary href={pub.link}>Read Full Paper</HeroPrimary>
        </div>
      </div>

      {/* Right Column: Detail Figure / Graph Area */}
      <div className="lg:col-span-5 relative">
        <div className="p-4 rounded-sm border border-theme-neutral-muted/20 bg-theme-neutral-dark/10">
          <div className="w-full rounded-sm p-4 flex items-center justify-center bg-white/5">
            {/* Safely using the detail image, ignoring summary */}
            <img
              src={pub.graph?.detail?.img}
              alt={`Graph details for ${pub.title}`}
              className="w-full max-h-[250px] object-contain"
            />
          </div>
          <p className="text-center text-theme-neutral-muted tracking-tight leading-relaxed text-xs mt-4">
            <AutoSciText text={pub.graph?.detail?.imgLabel || ""} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
