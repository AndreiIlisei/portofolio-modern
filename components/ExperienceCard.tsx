import { motion } from "framer-motion";
import React from "react";
import {
  ArticleCard,
  JobPicture,
  ExperienceCardDiv,
  CompanyName,
  ExperienceCardImg,
  PositionDescription,
  ExperienceCardLi,
  PeriodOfWork,
  ExperienceCardTechDiv,
  ExperienceCardUl,
  JobDetails,
  JobDetailsRow,
  StopSVG,
} from "../styles/ExperienceCard";
import { Experience } from "../typings";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <ArticleCard>
      <JobDetails>
        <JobPicture
          as={motion.img}
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="./shape.jpg"
        />

        <JobDetailsRow>
          <CompanyName> Shape Games </CompanyName>
          <PositionDescription>Frontend Developer Intern</PositionDescription>
          <PeriodOfWork>10-11-2019 / 10-11-2022 </PeriodOfWork>
          {/* <PeriodOfWork> Ended 10-11-2019 </PeriodOfWork> */}
        </JobDetailsRow>
      </JobDetails>

      <ExperienceCardDiv>
        <ExperienceCardTechDiv>
          <ExperienceCardImg src="/react.png" alt="" />
          <ExperienceCardImg src="/puuf.jpg" alt="" />
          <ExperienceCardImg src="/react.png" alt="" />
          <ExperienceCardImg src="/react.png" alt="" />
          <ExperienceCardImg src="/react.png" alt="" />
          <ExperienceCardImg src="/react.png" alt="" />

        </ExperienceCardTechDiv>

        <ExperienceCardUl>
          <ExperienceCardLi>
            I have been doing this and that and other stuff
          </ExperienceCardLi>
          <ExperienceCardLi>
            I have been doing this and tha dsadsat
          </ExperienceCardLi>
          <ExperienceCardLi>
            I have been doing this and that dasda
          </ExperienceCardLi>
          <ExperienceCardLi>I have been doing this and that</ExperienceCardLi>
          <ExperienceCardLi>
            I have been doing this and tha dadsat
          </ExperienceCardLi>
        </ExperienceCardUl>
      </ExperienceCardDiv>
    </ArticleCard>
  );
};

export default ExperienceCard;
