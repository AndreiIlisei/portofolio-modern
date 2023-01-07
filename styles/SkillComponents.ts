import styled from "styled-components";
import Image from "next/image";

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
  height: 60px;
  width: 60px;
  &:hover {
    filter: grayscale(100%);
  }

  @media (min-width: 1400px) {
    height: 100px;
    width: 100px;
  }
`;

export const SkillsImgAbsolutePosition = styled.div`
  position: absolute;
  opacity: 0;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 100%;
  z-index: 0;
  height: 60px;
  width: 60px;
  &:hover {
    opacity: 80%;
    background: white;
  }

  @media (min-width: 1400px) {
    height: 100px;
    width: 100px;
  }
`;

export const SkillsImgOverlayDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SkillsImgOverlayP = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: black;
  opacity: 100%;

  @media (min-width: 1400px) {
    font-size: 20px;
  }
`;
