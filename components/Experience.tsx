import { motion } from "framer-motion";
import React from "react";
import {
  ExperienceCardMainDiv,
  ExperienceMainDiv,
  WritingH3,
} from "../styles/Experience";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience;
};

const ExperiencePage = ({ experiences }: Props) => {
  return (
    <ExperienceMainDiv
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <WritingH3>Experience</WritingH3>

      <ExperienceCardMainDiv>
        <ExperienceCard experiences={experiences} />
        <ExperienceCard experiences={experiences} />
        <ExperienceCard experiences={experiences} />
        <ExperienceCard experiences={experiences} />
      </ExperienceCardMainDiv>
    </ExperienceMainDiv>
  );
};

export default ExperiencePage;
