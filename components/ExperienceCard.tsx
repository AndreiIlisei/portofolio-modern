import { motion } from "framer-motion";
import React from "react";
import {
  ArticleCard,
  ArticleImage,
  ExperienceCardDiv,
  ExperienceCardH4,
  ExperienceCardImg,
  ExperienceCardP,
  ExperienceCardUl,
} from "../styles/Experience";
import { Experience } from "../typings";

type Props = {
  experiences: Experience;
};

const ExperienceCard = ({ experiences }: Props) => {
  return (
    <ArticleCard>
      <ArticleImage
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

      <ExperienceCardDiv>
        <ExperienceCardH4> {experiences.company} </ExperienceCardH4>
        <ExperienceCardP> {experiences.jobTitle} </ExperienceCardP>
        <div>
          <ExperienceCardImg
            src="/react.png"
            height="40px"
            width="40px"
            alt=""
          />
          {/* <ExperienceCardImg
            src="/react.png"
            height="40px"
            width="40px"
            alt=""
          />
          <ExperienceCardImg
            src="/react.png"
            height="40px"
            width="40px"
            alt=""
          />
          <ExperienceCardImg
            src="/react.png"
            height="40px"
            width="40px"
            alt=""
          /> */}
        </div>
        <ExperienceCardP> Started Work - Ended..</ExperienceCardP>

        <ExperienceCardUl>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ExperienceCardUl>
      </ExperienceCardDiv>
    </ArticleCard>
  );
};

export default ExperienceCard;
