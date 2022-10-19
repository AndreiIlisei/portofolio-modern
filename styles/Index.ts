import styled from "styled-components";

export const IndexDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.white};
  height: 100vh;
  scroll-snap-type: y var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 0;

  ::-webkit-scrollbar {
    width: 12px;
    background-color: rgb(156, 163, 175, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: #f7ab0a;
  }
`;

export const HeroSection = styled.section`
  scroll-snap-align: start;
`;

export const AboutSection = styled.section`
  scroll-snap-align: center;
`;

export const ExperienceSection = styled.section`
  scroll-snap-align: center;
`;

export const SkillsSection = styled.section`
  scroll-snap-align: start;
`;

export const ProjectsSection = styled.section`
  scroll-snap-align: start;
`;

export const ContactSection = styled.section`
  scroll-snap-align: start;
`;
