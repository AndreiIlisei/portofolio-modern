import styled from "styled-components";
import Image from "next/image";

export const MainDivAbout = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: initial;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  max-width: 1280px;
  padding: 85px 10px 0 10px;
  margin: 0 auto 0 auto;

  @media (min-width: 600px) {
    justify-content: space-evenly;
    flex-direction: row;
    max-width: 1280px;
    padding: 0 40px 0 40px;
  }
`;

export const WritingH3 = styled.h3`
  position: relative;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.textSm};
  margin-bottom: 15px;
  top: 0px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.titleColour};
  letter-spacing: 20px;

  @media (min-width: 600px) {
    position: absolute;
    top: 90px;
    font-size: ${({ theme }) => theme.fontSize.textBig};
  }
`;

export const AboutImage = styled(Image)`
  object-fit: cover;
  border-radius: 9999px;
  width: 150px;
  height: 150px;
  flex-shrink: 0;

  @media (min-width: 600px) {
    border-radius: 8px;
    width: 350px;
    height: 460px;
  }
`;

export const AboutWriting = styled.div`
  padding: 0 15px 0 15px;

  @media (min-width: 600px) {
    padding: 30px;
  }
`;

export const WritingH4 = styled.h4`
  font-size: 15px;
  text-align: center;
  margin-bottom: 0px;
  line-height: 40px;
  text-decoration: underline;

  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.textSm};
    margin-bottom: 15px;
    font-weight: 600;
  }
`;

export const WritingPTag = styled.p`
  font-size: 10px;
  line-height: 15px;

  @media (min-width: 600px) {
    font-size: 15px;
    line-height: 15px;
  }
`;
