import { motion } from "framer-motion";
import React from "react";
import {
  SkillsImg,
  SkillsImgAbsolutePosition,
  SkillsImgMainDiv,
  SkillsImgOverlayDiv,
  SkillsImgOverlayP,
} from "../styles/Skills";

type Props = {
  directionLeft?: boolean;
};

const SkillComponent = ({ directionLeft }: Props) => (
  <SkillsImgMainDiv>
    <SkillsImg
      as={motion.img}
      // initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      // transition={{ duration: 1 }}
      // whileInView={{ opacity: 1, x: 0 }}
      src="https://reactjs.org/logo-og.png"
      height="150px"
      width="150px"
    />

    <SkillsImgAbsolutePosition>
      <SkillsImgOverlayDiv>
        <SkillsImgOverlayP> 100% </SkillsImgOverlayP>
      </SkillsImgOverlayDiv>
    </SkillsImgAbsolutePosition>
  </SkillsImgMainDiv>
);

export default SkillComponent;
