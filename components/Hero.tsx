import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import {
  ButtonsDiv,
  HeroButton,
  MainDiv,
  ProfileImage,
  SpanWriting,
  WritingH1,
  WritingH2,
  ZIndexDiv,
} from "../styles/Hero";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My name is ${pageInfo.name}`,
      "This is my portofolio Page",
      "Enjoy!",
    ],
    loop: true,
    delaySpeed: 2100,
  });

  return (
    <MainDiv>
      <BackgroundCircles />


      <ProfileImage
        src={urlFor(pageInfo?.profilePic).url()}
        alt="ProfileImage"
      />

      <ZIndexDiv>
        <WritingH2> {pageInfo?.role} </WritingH2>
        <WritingH1>
          <SpanWriting>{text}</SpanWriting>
          <Cursor cursorColor="#F7AB0A" />
        </WritingH1>

        <ButtonsDiv>
          <Link href={"#about"}>
            <HeroButton>About</HeroButton>
          </Link>
          <Link href={"#experience"}>
            <HeroButton>Experience</HeroButton>
          </Link>
          <Link href={"#skills"}>
            <HeroButton>Skills</HeroButton>
          </Link>
          <Link href={"#projects"}>
            <HeroButton>Projects</HeroButton>
          </Link>
        </ButtonsDiv>
      </ZIndexDiv>
    </MainDiv>
  );
};

export default Hero;
