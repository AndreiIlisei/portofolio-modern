import styled from "styled-components";
import Image from "next/image";

export const ArticleCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 8px;
  margin-top: 0;
  width: 100%;
  scroll-snap-align: center;
  background-color: #292929;
  opacity: 80%;
  cursor: pointer;
  overflow: hidden;
  transition-property: opacity;
  transition-duration: 200ms;
  padding-top: 20px;

  &:hover {
    opacity: 100%;
  }
`;

export const JobDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const JobPicture = styled(Image)`
  object-fit: cover;
  border-radius: 9999px;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  margin-right: 20px;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    margin-bottom: 20px;
    border-radius: 8px;
    width: 125px;
    height: 125px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    margin-bottom: 20px;
    border-radius: 8px;
    width: 150px;
    height: 150px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 20px;
    border-radius: 8px;
    width: 150px;
    height: 150px;
  }
`;

export const StopSVG = styled(Image)`
//   height: 10px;
//   width: 10px;
//   layout="fill";
`;

export const JobDetailsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CompanyName = styled.h1`
  font-size: 14px;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    font-size: 30px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 35px;
  }
`;

export const PositionDescription = styled.h2`
  font-size: 12px;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    font-size: 20px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const PeriodOfWork = styled.p`
  font-size: 11px;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
    font-size: 18px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: portrait) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 21px;
    margin-top: 4px;
  }
`;

// export const Random = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export const Border = styled.div`
//   border: 1px solid white;
//   width: 300px;
//   margin-bottom: 20px;
// `;

export const ExperienceCardDiv = styled.div`
  width: 100%;
`;

export const ExperienceCardTechDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  object-fit: cover;
`;

export const ExperienceCardImg = styled.img`
  border-radius: 9999px;
  width: 40px;
  height: 40px;
  margin: 10px 0 10px 0;

  @media (min-width: 600px) {
    width: 80px;
    height: 80px;
    margin: 30px 0 30px 0;
  }
`;

export const ExperienceCardTimelinePosition = styled.div`
  display: flex;
  justify-content: center;
`;

export const ExperienceCardTimeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;

  @media (min-width: 600px) {
    width: 500px;
  }

  @media (min-width: 1200px) {
    width: 600px;
  }
`;

export const ExperienceCardUl = styled.ul`
  list-style-type: disc;
  text-align: left;
  font-size: 13px;
  margin-top: 4px;

  @media (min-width: 600px) {
    font-size: 20px;
    margin: 16px 0 0 20px;
  }
`;

export const ExperienceCardLi = styled.li`
  padding: 10px;
  line-height: 15px;
`;
