import styled from "styled-components";
import Image from "next/image";

export const MainDivSkills = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  max-width: 2000px;
  padding: 0 40px 0 40px;
  margin: 0 auto 0 auto;

  @media (max-width: 600px) {
    text-align: left;
    flex-direction: column;
  }
`;

export const WritingH3Skills = styled.h3`
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

export const ProficiencyH3 = styled(WritingH3Skills)`
  top: 136px;
  letter-spacing: 3px;
  font-size: 11px;
`;

export const SkillComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
`;

export const SkillsImgMainDiv = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`;

export const SkillsImg = styled(Image)`
  border-radius: 9999px;
  border: 1px solid rgb(107 114 128);
  object-fit: cover;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: grayscale(100%);
  }
`;

export const SkillsImgAbsolutePosition = styled.div`
  position: absolute;
    opacity: 0;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 100%;
  z-index: 0;
  height: 150px;
  width: 150px;
  &:hover {
    opacity: 80%;
    background: white;
  }
`;

export const SkillsImgOverlayDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SkillsImgOverlayP = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: black;
  opacity: 100%;
`;
