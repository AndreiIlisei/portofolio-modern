import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

export const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto 0 auto;
  z-index: 20;
  padding: 20px;
`;

export const SocialMediaIcons = styled(SocialIcon)`
  &:hover {
    transform: scale(1.5, 1.5);
    filter: brightness(0) saturate(100%) invert(58%) sepia(85%) saturate(871%)
      hue-rotate(1deg) brightness(107%) contrast(94%);
  }
`;

export const IconsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const EmailIconsStyle = styled(IconsStyle)`
  &:hover {
    transform: scale(1.1, 1.1);
    filter: brightness(0) saturate(100%) invert(58%) sepia(85%) saturate(871%)
      hue-rotate(1deg) brightness(107%) contrast(94%);
  }
`;

export const EmailText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textXS};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.grey};

  @media screen and (max-width: 600px) {
    visibility: hidden;
    display: none;
  }
`;
