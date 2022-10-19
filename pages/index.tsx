import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import ExperiencePage from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import SkillsPage from "../components/Skills";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  IndexDiv,
  ProjectsSection,
  SkillsSection,
} from "../styles/Index";
import { PageInfo, Project, Skills, Social, Experience } from "../typings";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skills[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, socials, experiences, projects, skills }: Props) => {
  return (
    <IndexDiv>
      <Head>
        <title>Andrei`s Portofolio</title>
      </Head>

      <Header socials={socials} />

      <HeroSection>
        <Hero pageInfo={pageInfo} />
      </HeroSection>

      <AboutSection id="about">
        <About pageInfo={pageInfo} />
      </AboutSection>

      <ExperienceSection id="experience">
        <ExperiencePage experiences={experiences} />
      </ExperienceSection>

      <SkillsSection id="skills">
        <SkillsPage />
      </SkillsSection>

      <ProjectsSection id="projects">
        <Projects />
      </ProjectsSection>

      <ContactSection id="contact">
        <ContactForm pageInfo={pageInfo} />
      </ContactSection>
    </IndexDiv>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skills[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
    revalidate: 30,
  };
};
