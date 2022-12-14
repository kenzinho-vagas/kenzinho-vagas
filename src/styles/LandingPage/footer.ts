import styled from "styled-components";

export const FooterLanding = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0;
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
    margin-top: 50px;
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

  @media (max-width: 1070px) {
    .footerContent {
      gap: 20px;
    }
    .icons svg {
      margin: 5px;
    }

  }

  @media (max-width: 905px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    .footerContent {
      align-items: center;
      flex-direction: column;
      gap: 0;
      text-align: center;
    }
    .followUs {
      margin-top: 5px;
    }
  }
`;

export const FooterCopyright = styled.div`
  background: var(--color-primary);
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    text-align: end;
    color: var(--color-white);
    font-size: 0.75rem;
  }
`;
