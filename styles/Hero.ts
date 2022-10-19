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
  height: 300px;
  width: 300px;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;

export const ZIndexDiv = styled.div`
  z-index: 20;
`;

export const WritingH2 = styled.h2`
  color: rgb(107 114 128);
  font-size: ${({ theme }) => theme.fontSize.textXS};
  text-transform: uppercase;
  margin-bottom: 25px;
  letter-spacing: 15px;

  @media screen and (max-width: 600px) {
    letter-spacing: 10px;
  }
`;

export const WritingH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.textBig};
  font-weight: 600;
  scroll-padding-left: 40px;
  scroll-padding-right: 40px;

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.textXS};
    font-weight: 100;
  }
`;

export const SpanWriting = styled.span`
  margin-right: 12px;

  @media screen and (max-width: 600px) {
    margin-right: 5px;
  }
`;

export const HeroButton = styled.button`
  background: none;
  padding: 8px 24px 8px 24px;
  border: 1px solid #242424;
  border-radius: 9999px;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 13px;
  color: rgb(107 114 128);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    border-color: #f7ac0ab7;
    color: #f7ac0ab9;
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.textXS};
    letter-spacing: 5px;
  }
`;

export const ButtonsDiv = styled.div`
  padding-top: 30px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
