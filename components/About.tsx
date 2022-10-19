import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import {
  AboutImage,
  AboutWriting,
  MainDivAbout,
  WritingH3,
  WritingH4,
  WritingPTag,
} from "../styles/About";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <MainDivAbout
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <WritingH3>About</WritingH3>

      <AboutImage
        as={motion.img}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
      />

      <AboutWriting>
        <WritingH4> Here is a little background</WritingH4>

        <WritingPTag>{pageInfo.backgroundInformation}</WritingPTag>
      </AboutWriting>
    </MainDivAbout>
  );
};

export default About;
