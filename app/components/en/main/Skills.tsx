import {
  Coding_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillsText";
import ResponsiveVideo from "@/components/common/ResponsiveVideo";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-8"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
      <div className="max-w-3xl mx-0 flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {Coding_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <ResponsiveVideo
            src="/cards-video.webm"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
