import styled from "styled-components";
import Image from "next/image";

export const MainDivProjects = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  text-align: left;
  width: 100%;
  justify-content: space-evenly;
  margin: 0 auto 0 auto;
  align-items: center;
  z-index: 0;
`;

export const PageTitle = styled.h3`
  position: absolute;
  text-transform: uppercase;
  color: rgb(107 114 128);
  font-size: 20px;
  letter-spacing: 20px;
  top: 96px;
  margin-left: 20px;

  @media (min-width: 600px) {
    font-size: 60px;
  }
`;

export const ProjectsShowingDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  z-index: 20;
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;

  ::-webkit-scrollbar {
    height: 12px;
    background-color: rgb(156, 163, 175, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: #f7ab0a;
  }
`;

export const ShowingDiv = styled.div`
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 600px) {
    padding: 166px;
    margin: 20px 0 20px 0;
  }
`;

export const ProjectsShowingImg = styled(Image)`
  height: 100px;
  width: 100px;

  @media (min-width: 600px) {
    height: 400px;
    width: 400px;
  }
`;

export const CaseStudyDiv = styled.div`
  width: 350px;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    width: 800px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    width: 600px;
  }

  @media (min-width: 1500px) {
    margin-top: 40px;
    padding-left: 4px;
    padding-right: 40px;
    max-width: 1152px;
  }
`;

export const CaseStudyH4 = styled.h4`
  font-size: 15px;
  font-weight: 400px;
  text-align: center;
  padding: 10px;

  @media (min-width: 600px) {
    font-size: 30px;
  }
`;

export const CaseStudySpan = styled.span`
  text-decoration: underline;
  text-decoration-color: yellow;
`;

export const CaseStudyP = styled.p`
  font-size: 10px;
  text-align: center;
  text-align: justify;
  text-justify: inter-word;

  @media (min-width: 600px) {
    font-size: 15px;
  }
`;

export const Skew = styled.div`
  width: 100%;
  position: absolute;
  top: 25%;
  left: 0;
  height: 400px;
  background-color: ${({ theme }) => theme.palette.yellow};
  opacity: 30%;
  transform: skewY(-12deg);

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    height: 600px;
    top: 20%;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    height: 800px;
    top: 20%
  }
`;
