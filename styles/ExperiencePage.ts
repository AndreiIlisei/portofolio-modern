import styled from "styled-components";

export const ExperiencePageDiv = styled.div`
  height: 100vh;
  display: flex;
  text-align: justify;
  flex-direction: column;
  justify-content: initial;
  padding: 75px 15px 0 15px;
  position: relative;
  overflow: hidden;
  margin: 0 auto 0 auto;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 1280px;
  }
`;

export const PageTitle = styled.h3`
  position: relative;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.titleColour};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.textSm};
  top: 0px;
  margin-bottom: 20px;
  letter-spacing: 15px;
  padding-left: 15px;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    position: absolute;
    top: 90px;
    font-size: 25px;
    letter-spacing: 20px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    position: absolute;
    top: 96px;
    font-size: 30px;
    padding-left: 20px;
    letter-spacing: 20px;
  }

  @media (min-width: 1200px) {
    position: absolute;
    top: 96px;
    font-size: ${({ theme }) => theme.fontSize.textBig};
    padding-left: 20px;
    letter-spacing: 20px;
  }
`;

export const ExperienceCardMainDiv = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  height: auto;
  padding-bottom: 10px;

  scroll-snap-type: x var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;

  ::-webkit-scrollbar {
    height: 12px;
    background-color: rgb(156, 163, 175, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: #f7ab0a;
  }
`;