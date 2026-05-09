import React from "react";
import PageHero from "../../Layout/PageHero";
import BentoGrid from "../../ui/BentoGrid";
import { heroData } from "../../../constants/beamlineData";
import bgImg from "../../../assets/images/img9.jpg";

export default function BeamlineHero() {
  return (
    <PageHero
      data={heroData}
      bgImage={bgImg}
      rightContent={<BentoGrid />}
      // Fixed: Added md:col-span-6
      leftCol="md:col-span-6 lg:col-span-5"
      rightCol="md:col-span-6 lg:col-span-7"
    />
  );
}
