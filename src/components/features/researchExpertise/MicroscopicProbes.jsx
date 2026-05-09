import React from "react";
import { Play, ImageIcon, BarChart3 } from "lucide-react";
import SectionHeader from "../../Layout/SectionHeader";
import { FadeUp } from "../../Layout/AnimatedWrapper";
import AutoSciText from "../../../utils/AutoSciText";

const MicroscopicProbes = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div>
      <SectionHeader title="Microscopic Local Probes" />
      <div className="space-y-20 md:space-y-32">
        {data.map((probe) => (
          <FadeUp
            key={probe.id}
            margin="-50px"
            className="flex flex-col w-full"
          >
            {/* Probe Header Info */}
            <div className="max-w-5xl mb-8 md:mb-12 w-full">
              <h2 className="text-secondary mb-8">
                <AutoSciText text={probe.title} />
              </h2>
              <div className="rounded-r-sm mb-6 shadow-lg">
                <span className="text-theme-accent text-[10px] md:text-[11px] font-bold uppercase tracking-widest block mb-2 md:mb-3">
                  Operating Principle
                </span>
                <p className="text-theme-neutral-light text-sm md:text-base leading-relaxed m-0 md:text-justify">
                  <AutoSciText text={probe.principle} />
                </p>
              </div>
              <p className="text-theme-neutral-light leading-relaxed text-sm md:text-base lg:text-lg m-0">
                <AutoSciText text={probe.desc} />
              </p>
            </div>

            {/* Probe Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
              {probe.media.map((mediaObj, idx) => {
                const isGraph = mediaObj.type === "graph";
                // Handle different image keys in your data for graphs vs images
                const mediaUrl =
                  mediaObj.img || mediaObj.graphImg || mediaObj.thumbnailImg;
                const mediaCaption =
                  mediaObj.imgLabel || mediaObj.graphLabel || mediaObj.caption;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col group w-full h-full ${
                      isGraph ? "md:col-span-2" : "col-span-1"
                    }`}
                  >
                    <div
                      className={`relative rounded-sm p-4 md:p-6 flex items-center justify-center w-full ${
                        isGraph
                          ? "h-64 md:h-[330px] lg:h-[400px]"
                          : "h-64 md:h-[250px] lg:h-[300px]"
                      }`}
                    >
                      {mediaObj.type === "video" ? (
                        <a
                          href={mediaObj.videoUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full h-full flex items-center justify-center cursor-pointer"
                        >
                          <img
                            src={mediaUrl}
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-theme-black/40 flex items-center justify-center group-hover:bg-transparent transition-all">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
                              <Play className="w-4 h-4 md:w-5 md:h-5 ml-1 fill-current" />
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={mediaUrl}
                            alt={`${mediaObj.type} media`}
                            className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-2 right-2 bg-theme-black/90 px-2 py-1 rounded text-[9px] md:text-[10px] font-mono text-theme-neutral-light border border-zinc-700 flex items-center gap-1.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {isGraph ? (
                              <BarChart3 className="w-3 h-3 text-theme-accent" />
                            ) : (
                              <ImageIcon className="w-3 h-3 text-theme-accent" />
                            )}
                            <span className="uppercase">{mediaObj.type}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-auto pt-4">
                      <p className="text-center text-theme-neutral-light font-mono tracking-tight leading-relaxed text-[11px] md:text-xs px-2">
                        <AutoSciText text={mediaCaption || ""} />
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
};

export default MicroscopicProbes;
