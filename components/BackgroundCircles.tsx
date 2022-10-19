import { motion } from "framer-motion";
import React from "react";
import {
  BackgroundCirclesDiv,
  FirstCircle,
  SecondCircle,
  ThirdCircle,
  ForthCircle,
  FifthCircle,
} from "../styles/BackgroundCircles";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <BackgroundCirclesDiv
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
    >
      <FirstCircle />
      {/* <SecondCircle /> */}
      {/* <ThirdCircle /> */}
      <ForthCircle />
      {/* <FifthCircle /> */}
    </BackgroundCirclesDiv>
  );
};

export default BackgroundCircles;
