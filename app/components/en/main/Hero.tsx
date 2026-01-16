import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-full w-full overflow-hidden"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" media="(min-width: 768px)" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
