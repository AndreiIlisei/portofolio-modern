import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.fontSize.textMd};
  text-align: center;
`;

export const ProfileImage = styled.img`
  border-radius: 9999px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
  margin-top: 30px;

  @media (min-width: 360px) {
    height: 200px;
    width: 200px;
    margin-bottom: 20px;
  }

  @media (min-width: 600px) {
    height: 300px;
    width: 300px;
    margin-bottom: 20px;
  }
`;

export const ZIndexDiv = styled.div`
  z-index: 20;
  
  @media (min-width: 1300px) {
    width: 900px;
`;

export const WritingH2 = styled.h2`
  color: rgb(107 114 128);
  font-size: ${({ theme }) => theme.fontSize.textXS};
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 4px;

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.textXS};
    letter-spacing: 7px;
  }

  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.textSm};
    letter-spacing: 15px;
    margin-top: 10px;
  }
`;

export const WritingH1 = styled.h1`
  font-size: 13px;
  font-weight: 100;
  scroll-padding-left: 40px;
  scroll-padding-right: 40px;

  @media (min-width: 360px) {
    font-size: 15px;
    margin-top: 20px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    font-weight: 600;
    margin-top: 30px;
    font-size: ${({ theme }) => theme.fontSize.textMd};
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    font-size: ${({ theme }) => theme.fontSize.textMd};
    font-weight: 600;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.textBig};
    font-weight: 600;
  }
`;

export const SpanWriting = styled.span`
  margin-right: 5px;

  @media screen and (min-width: 600px) {
    margin-right: 12px;
  }
`;

export const HeroButton = styled.button`
  background: none;
  padding: 5px 24px 5px 24px;
  border: 1px solid #242424;
  border-radius: 9999px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.textXS};
  letter-spacing: 4px;
  color: rgb(107 114 128);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  @media (min-width: 360px) {
    font-size: 15px;
    letter-spacing: 7px;
    padding: 8px 24px 8px 24px;
  }

  &:hover {
    border-color: #f7ac0ab7;
    color: #f7ac0ab9;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    letter-spacing: 13px;
    font-size: 15px;
    margin-top: 15px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    font-size: 15px;
    letter-spacing: 13px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;
