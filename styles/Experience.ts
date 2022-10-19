import styled from "styled-components";
import Image from "next/image";

export const ExperienceMainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  overflow-hidden;
  margin: 0 auto 0 auto;
  align-items: center;
  max-width: 1280px;
  padding: 0 40 0 40;

  @media (max-width: 600px) {
    font-size: 60px;
    flex-direction: column;
  }
`;

export const WritingH3 = styled.h3`
  position: absolute;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.titleColour};
  font-size: ${({ theme }) => theme.fontSize.textBig};
  letter-spacing: 20px;
  top: 96px;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.textSm};
    letter-spacing: 15px;
  }
`;

export const ExperienceCardMainDiv = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-left: 20px;
  width: 100%;
  padding: 40px;
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;

  ::-webkit-scrollbar {
    width: 12px;
    background-color: rgb(156, 163, 175, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: #f7ab0a;
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.textSm};
    letter-spacing: 15px;
    padding: 30px;
  }
`;

export const ArticleCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  margin-top: 28px;
  width: 600px;
  scroll-snap-align: center;
  background-color: #292929;
  padding: 40px;
  // opacity: 90%;
  cursor: pointer;
  overflow: hidden;
  transition-property: opacity;
  transition-duration: 200ms;

  &:hover {
    opacity: 100%;
  }

  @media (max-width: 600px) {
    width: 500px;
    height: 500px;
    margin-top: 0;
    padding: 50px;
  }
`;

export const ArticleImage = styled(Image)`
  object-fit: cover;
  border-radius: 8px;
  width: 256px;
  height: 360px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    // margin-bottom: -80px;
    border-radius: 9999px;
    width: 100px;
    height: 100px;
  }
`;

export const ExperienceCardDiv = styled.div`
  padding-left: 40x;
  padding-right: 40px;

  @media (max-width: 600px) {
    padding-left: 0x;
    padding-right: 0px;
  }
`;

export const ExperienceCardH4 = styled.h4`
  font-weight: 300;
  font-size: 36px;
  line-height: 40px;

  @media (max-width: 600px) {
    font-weight: 100;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 5px;
    text-align: center;
    margin-top: 10px;
  }
`;

export const ExperienceCardP = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-top: 4px;

  @media (max-width: 600px) {
    font-weight: 100;
    font-size: 12px;
    line-height: 12px;
    // margin-top: 4px;
    text-align: center;
    letter-spacing: 5px;
  }
`;

export const ExperienceCardUl = styled.ul`
  font-size: 20px;
  margin: 16px 0 0 20px;
  list-style-type: disc;

  @media (max-width: 600px) {
    font-weight: 100;
    font-size: 15px;
    line-height: 10px;
    // margin-top: 4px;
  }
`;

export const ExperienceCardTechDiv = styled.div`
  display: flex;
  // margin: 8px 0 8px 8px;
`;

export const ExperienceCardImg = styled(Image)`
  border-radius: 9999px;
`;
