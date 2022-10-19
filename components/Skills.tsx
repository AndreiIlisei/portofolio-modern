import { motion } from "framer-motion";
import React from "react";
import {
  MainDivSkills,
  ProficiencyH3,
  SkillComponentGrid,
  WritingH3Skills,
} from "../styles/Skills";
import SkillComponent from "./SkillComponent";

type Props = {};

const SkillsPage = (props: Props) => {
  return (
    <MainDivSkills as={motion.div}>
      <WritingH3Skills>Skills</WritingH3Skills>

      <ProficiencyH3>Hover over a skill for currency</ProficiencyH3>

      <SkillComponentGrid>
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
        <SkillComponent />
      </SkillComponentGrid>
    </MainDivSkills>
  );
};

export default SkillsPage;
