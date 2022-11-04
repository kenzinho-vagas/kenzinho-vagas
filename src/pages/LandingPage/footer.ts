import styled from "styled-components";

export const FooterLanding = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 10px;
  gap: 30px;

  a {
    text-decoration: none;
    color: var(--text-color);
    margin: 5px;
  }

  .footerContent {
    display: flex;
    gap: 70px;
  }

  .titleFooter {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
  }

  .footer1 {
    width: 215px;
    line-height: 20px;
    margin: 10px 0;
  }
  .footer1 p {
    margin: 15px 0;
  }

  .logoFooter {
    font-weight: 900;
    gap: 5px;
    text-align: center;
    font-size: 26px;
    display: flex;
    margin-bottom: 30px;
  }

  .footer2 {
    width: 215px;
    margin-top: 20px;
    line-height: 30px;
  }

  .followUs {
    margin-top: 60px;
    text-align: center;
  }

  .icons {
    display: flex;
    justify-content: center;
  }
  .icons svg {
    margin: 10px;
    cursor: pointer;
    font-size: 1.6rem;
  }

  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
  }

  @media (max-width: 600px) {
    .footerContent {
      align-items: center;
      flex-direction: column;
      gap: 0;
    }
    .followUs {
      margin-top: 20px;
    }
  }
`;
