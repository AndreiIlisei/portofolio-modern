import { motion } from "framer-motion";
import React from "react";
import {
  MainDivSkills,
  ProficiencyH3,
  SkillComponentGrid,
  PageTitle,
} from "../styles/Skills";
import SkillComponent from "./SkillComponent";

type Props = {};

const SkillsPage = (props: Props) => {
  return (
    <MainDivSkills as={motion.div}>
      <PageTitle>Skills</PageTitle>

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
        <SkillComponent />
      </SkillComponentGrid>
    </MainDivSkills>
  );
};

export default SkillsPage;
