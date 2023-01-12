import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import {
  SkillsImg,
  SkillsImgAbsolutePosition,
  SkillsImgMainDiv,
  SkillsImgOverlayDiv,
  SkillsImgOverlayP,
} from "../styles/SkillComponents";
import { Skills } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: Skills;
};

const SkillComponent = ({ skill }: Props) => (
  <SkillsImgMainDiv>
    <SkillsImg
      as={motion.img}
      // initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      // transition={{ duration: 1 }}
      // whileInView={{ opacity: 1, x: 0 }}
      src={urlFor(skill?.image).url()}
    />

    <SkillsImgAbsolutePosition>
      <SkillsImgOverlayDiv>
        <SkillsImgOverlayP>{skill.progress} </SkillsImgOverlayP>
      </SkillsImgOverlayDiv>
    </SkillsImgAbsolutePosition>
  </SkillsImgMainDiv>
);

export default SkillComponent;
