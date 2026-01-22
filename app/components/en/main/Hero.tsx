import React from "react";
import HeroContent from "../sub/HeroContent";
import ResponsiveVideo from "@/components/common/ResponsiveVideo";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-full w-full overflow-hidden"
      id="about-me"
    >
      <ResponsiveVideo
        src="/blackhole.webm"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
