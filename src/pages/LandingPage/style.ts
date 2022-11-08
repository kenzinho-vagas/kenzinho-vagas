import styled from "styled-components";

export const DivLanding = styled.div`
  background-color: var(--color-primary);
  height: 460px;
  color: white;
  display: flex;
  justify-content: space-between;

  .titleLand {
    width: 90%;
    font-size: 40px;
    line-height: 60px;
    font-weight: bold;
    margin: 20px 0;
  }
  .textLand {
    width: 90%;
    color: var(--color-white);
    font-size: 18px;
    display: inline-block;
    position: relative;
  }

  .textLand::after {
    content: "";
    position: absolute;
    width: 450px;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-white);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .textLand:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .div1 {
    width: 45%;
    padding: 55px 0 0 70px;
  }

  .div1 img {
    max-width: 100%;
  }
  .div2 {
    width: 55%;
    padding-top: 80px;
  }

  @media (max-width: 850px) {
    .titleLand {
      font-size: 30px;
      line-height: 40px;
      font-weight: bold;
      margin: 20px 0;
    }
    .textLand {
      font-size: 22px;
    }
    .div1 {
      padding-top: 100px;
    }
  }

  @media (max-width: 650px) {
    .div1 {
      display: none;
    }
    .titleLand {
      font-size: 24px;
      line-height: 40px;
      font-weight: bold;
      margin: 30px 0;
    }
    .div2 {
      width: 100%;
      padding-top: 100px;
      text-align: center;
      padding: 15px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const DivAllCompanies = styled.div`
  background-color: var(--color-white);
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .titleLand2 {
    font-size: 24px;
    color: var(--color-primary);
    padding: 20px;
    margin-bottom: 30px;
  }

  .carousel-item {
    max-width: 450px;
    height: 230px;
    padding: 90px 60px;
    border: 1px solid var(--grey-2);
    border-radius: 5px;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 8px;
  }
`;

export const DivOurNumbers = styled.div`
  background-color: var(--color-secundary);
  height: 390px;
  color: var(--color-white);
  text-align: center;
  align-items: center;

  .titleLand2 {
    font-size: 24px;
    font-weight: bold;
    padding: 20px;
    margin-bottom: 50px;
  }

  .listNumbers {
    display: flex;
    justify-content: space-evenly;
    font-weight: bold;
  }

  .listNumbers li {
    background-color: var(--color-white);
    color: var(--text-color2);
    width: 241px;
    height: 150px;
    align-content: center;
    padding-top: 60px;
    font-size: 22px;
    border-radius: 6px;
  }
  .listNumbers span {
    color: var(--color-primary);
  }

  .mobile {
    display: none;
  }
  @media (max-width: 700px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
`;

export const DivKenzinho = styled.div`
  .whyKenzinho {
    display: flex;
    padding: 30px;
  }
  .divkenzie1 {
    width: 50%;
    margin: 10px;
  }
  .divkenzie1 img {
    max-width: 100%;
  }
  .divkenzie2 {
    width: 50%;
  }

  .titleDiv3 {
    font-weight: bold;
    font-size: 24px;
    margin-top: 10px;
    text-align: center;
  }
  .content3 {
    font-size: 22px;
    font-weight: bold;
    margin-top: 140px;
    line-height: 30px;
  }
  .footer {
    width: 100%;
    height: 40px;
    background-color: var(--color-primary);
  }

  @media (max-width: 790px) {
    .content3 {
      margin-top: 100px;
    }
  }
  @media (max-width: 700px) {
    .whyKenzinho {
      padding: 0;
    }

    .divkenzie1 {
      display: none;
    }
    .divkenzie2 {
      width: 100%;
      padding-top: 100px;
      text-align: center;
      padding: 0;
    }
    .content3 {
      margin: 50px;
    }
  }
`;
