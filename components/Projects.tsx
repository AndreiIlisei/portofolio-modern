import { motion } from "framer-motion";
import React from "react";
import {
  CaseStudyDiv,
  CaseStudyH4,
  CaseStudyP,
  CaseStudySpan,
  MainDivProjects,
  ProjectsShowingDiv,
  ProjectsShowingImg,
  ShowingDiv,
  Skew,
  PageTitle,
} from "../styles/Projects";
import { Project } from "../typings";

type Props = {projects: Project[]};

const Projects = ({projects}: Props) => {

  return (
    <MainDivProjects>
      <PageTitle>Projects</PageTitle>

      <ProjectsShowingDiv>
        {projects.map((project, i) => (
          <ShowingDiv key={project._id}>
            <ProjectsShowingImg
              as={motion.img}
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            />

            <CaseStudyDiv>
              <CaseStudyH4>
                <CaseStudySpan>
                  Case Study {i + 1} of {projects.length}
                </CaseStudySpan>{" "}
                : Netflix Clone
              </CaseStudyH4>

              <CaseStudyP>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                dignissimos exercitationem eos recusandae, quia ad quis quod,
                saepe porro atque consectetur vitae fugit harum, amet nemo unde
                animi est aperiam?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                dignissimos exercitationem eos recusandae, quia ad quis quod,
                saepe porro atque consectetur vitae fugit harum, amet nemo unde
                animi est aperiam?     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                dignissimos exercitationem eos recusandae, quia ad quis quod,
                saepe porro atque consectetur vitae fugit harum, amet nemo unde
                animi est aperiam?
              </CaseStudyP>
            </CaseStudyDiv>
          </ShowingDiv>
        ))}
      </ProjectsShowingDiv>

      <Skew />
    </MainDivProjects>
  );
};

export default Projects;
