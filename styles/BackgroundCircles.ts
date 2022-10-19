import styled from "styled-components";

export const BackgroundCirclesDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FirstCircle = styled.div`
  position: absolute;
  border-width: 5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.darkGrey};
  border-radius: 9999px;
  height: 500px;
  width: 500px;
  margin-top: 500px;

  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @media screen and (max-width: 600px) {
    height: 250px;
    width: 250px;
    margin-top: 200px;

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  }
`;

export const SecondCircle = styled.div`
  position: absolute;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.darkGrey};
  border-radius: 9999px;
  height: 300px;
  width: 300px;
  margin-top: 500px;
`;

export const ThirdCircle = styled.div`
  position: absolute;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.darkGrey};
  border-radius: 9999px;
  height: 500px;
  width: 500px;
  margin-top: 500px;
`;

export const ForthCircle = styled.div`
  position: absolute;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.yellow};
  border-radius: 9999px;
  height: 900px;
  width: 900px;
  margin-top: 500px;
  opacity: 10%;
  z-index: 0;

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.1;
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const FifthCircle = styled.div`
  position: absolute;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.darkGrey};
  border-radius: 9999px;
  height: 800px;
  width: 800px;
  margin-top: 500px;
`;
