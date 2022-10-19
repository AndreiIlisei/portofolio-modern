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

  //   @media (max-width: 600px) {
  //     font-size: 60px;
  //     flex-direction: column;
  //   }
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
    width: 12px;
    background-color: rgb(156, 163, 175, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: #f7ab0a;
  }
`;

export const ProjectsShowingImg = styled(Image)`
  height: 400px;
  width: 400px;
`;

export const ShowingDiv = styled.div`
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
  align-items: center;
  justify-content: center;
  padding: 166px;
  height: 100vh;
`;

export const WritingH3 = styled.h3`
  position: absolute;
  text-transform: uppercase;
  color: rgb(107 114 128);
  font-size: 20px;
  letter-spacing: 20px;
  top: 96px;

  @media (max-width: 600px) {
    font-size: 60px;
  }
`;

export const Skew = styled.div`
  width: 100%;
  position: absolute;
  top: 30%;
  left: 0;
  height: 500px;
  background-color: ${({ theme }) => theme.palette.yellow};
  opacity: 30%;
  transform: skewY(-12deg);
`;

export const CaseStudyDiv = styled.div`
  margin-top: 40px;
  padding-left: 4px;
  padding-right: 40px;
  max-width: 1152px;
`;
export const CaseStudyH4 = styled.h4`
  font-size: 30px;
  font-weight: 400px;
  text-align: center;
`;

export const CaseStudySpan = styled.span`
  text-decoration: underline;
  text-decoration-color: yellow;
`;

export const CaseStudyP = styled.p`
  font-size: 30px;
  text-align: left;

  //   text-align: center on phones
`;
