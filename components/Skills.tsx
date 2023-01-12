import { motion } from "framer-motion";
import React from "react";
import {
  MainDivSkills,
  ProficiencyH3,
  SkillComponentGrid,
  PageTitle,
} from "../styles/Skills";
import { Skills } from "../typings";
import SkillComponent from "./SkillComponent";

type Props = { skills: Skills[] };

const SkillsPage = ({ skills }: Props) => {
  console.log(skills[0].image);
  return (
    <MainDivSkills as={motion.div}>
      <PageTitle>Skills</PageTitle>

      <ProficiencyH3>Hover over a skill for currency</ProficiencyH3>

      <SkillComponentGrid>
        {skills?.map((skill) => (
          <SkillComponent key={skill._id} skill={skill} />
        ))}
      </SkillComponentGrid>
    </MainDivSkills>
  );
};

export default SkillsPage;
