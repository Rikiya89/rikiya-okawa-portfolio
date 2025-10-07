"use client";

import { ComponentType } from "react";
import SkillDataProvider from "@/components/en/sub/SkillDataProvider";
import DefaultSkillText from "@/components/en/sub/SkillsText";
import { Coding_skill } from "@/constants";
import { motion } from "framer-motion";

type ClientWorksSkillsProps = {
  SkillTextComponent?: ComponentType;
};

const ClientWorksSkills = ({ SkillTextComponent = DefaultSkillText }: ClientWorksSkillsProps) => {
  const SkillText = SkillTextComponent;

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-8"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mx-0 flex flex-row justify-center flex-wrap mt-4 gap-5 items-center"
      >
        {Coding_skill.map((image, index) => (
          <SkillDataProvider
            key={image.skill_name + index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </motion.div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientWorksSkills;
