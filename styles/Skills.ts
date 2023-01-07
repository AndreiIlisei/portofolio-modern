import styled from "styled-components";

export const MainDivSkills = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h3`
  text-transform: uppercase;
  color: rgb(107 114 128);
  font-size: 20px;
  letter-spacing: 10px;

  @media (min-width: 1400px) {
    font-size: 30px;
  }
`;

export const ProficiencyH3 = styled(PageTitle)`
  margin-bottom: 30px;
  letter-spacing: 3px;
  font-size: 11px;

  @media (min-width: 1400px) {
    font-size: 15px;
  }
`;

export const SkillComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
`;
