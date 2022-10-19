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
  WritingH3,
} from "../styles/Projects";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <MainDivProjects>
      <WritingH3>Projects</WritingH3>

      <ProjectsShowingDiv>
        {projects.map((project, i) => (
          <ShowingDiv>
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
                  Case Study {i + 1} of {projects.length}:
                </CaseStudySpan>{" "}
                Netflix Clone
              </CaseStudyH4>

              <CaseStudyP>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
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
