import styled from "styled-components";
import Image from "next/image";

export const MainDivAbout = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  text-align: justify;
  align-items: center;
  max-width: 1280px;
  padding: 0 40px 0 40px;
  margin: 0 auto 0 auto;

  @media (max-width: 600px) {
    text-align: justify;
    flex-direction: column;
    justify-content: initial;
    padding: 85px 10px 0 10px;
  }
`;

export const WritingH3 = styled.h3`
  position: absolute;
  top: 90px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.titleColour};
  font-size: ${({ theme }) => theme.fontSize.textBig};
  letter-spacing: 20px;

  @media (max-width: 600px) {
    position: relative;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.textSm};
    margin-bottom: 15px;
    top: 0px;
  }
`;

export const AboutImage = styled(Image)`
  object-fit: cover;
  border-radius: 8px;
  width: 350px;
  height: 460px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    border-radius: 9999px;
    width: 150px;
    height: 150px;
  }

  @media (max-width: 600px) {
    border-radius: 9999px;
    width: 150px;
    height: 150px;
  }
`;

export const AboutWriting = styled.div`
  padding: 30px;

  @media (max-width: 600px) {
    padding: 0 15px 0 15px;
  }
`;

export const WritingH4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.textBig};
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 15px;
  text-decoration: underline;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 0px;
    text-align: center;
  }
`;

export const WritingPTag = styled.p`
  font-size: 15px;
  line-height: 30px;

  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
