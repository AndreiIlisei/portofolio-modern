import { motion } from "framer-motion";
import React from "react";
import {
  ExperienceCardMainDiv,
  ExperiencePageDiv,
  PageTitle,
} from "../styles/ExperiencePage";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experience[] };

const ExperiencePage = ({ experiences }: Props) => {
  return (
    <ExperiencePageDiv
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <PageTitle>Experience</PageTitle>

      <ExperienceCardMainDiv>
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </ExperienceCardMainDiv>
    </ExperiencePageDiv>
  );
};

export default ExperiencePage;
