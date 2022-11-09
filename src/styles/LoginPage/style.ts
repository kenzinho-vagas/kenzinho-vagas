import styled from "styled-components";

export const DivLogin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  margin: 100px 0;

  .contentLogin {
    width: 489px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: appearFromTopLeft 1s;

    @media (min-width: 768px) {
      width: 600px;
    }
  }

  .title {
    text-align: center;
    margin: 20px;
    font-weight: bolder;
    font-size: 30px;
  }

  .account {
    text-align: center;
    margin: 20px;
  }

  @keyframes appearFromTopLeft {
    0% {
      opacity: 0;
      transform: translate(-50%);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;
