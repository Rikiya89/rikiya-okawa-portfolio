import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] 
        2xl:h-full 2xl:w-full 
        xl:h-full xl:w-full 
        lg:h-full lg:w-full 
        md:h-full md:w-full 
        sm:h-full sm:w-full 
        left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;