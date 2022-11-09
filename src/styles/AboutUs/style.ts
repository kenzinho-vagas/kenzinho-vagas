import styled from "styled-components";

export const About = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 40px;
  font-size: 18px;
  justify-content: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  gap: 100px;

  .textAbout {
    width: 40%;
    text-align: justify;
  }

  .textAbout h3 {
    margin-top: 20px;
    font-size: 20px;
    line-height: 30px;
  }

  .textAbout h2 {
    font-size: 28px;
    border-bottom: 2px solid white;
    width: 100%;
    line-height: 50px;
  }
  .textAbout ul li {
    list-style: circle;
    margin: 20px;
  }

  .divUs {
    width: 40%;
    height: 60%;
    text-align: center;
    color: var(--color-primary);
    font-weight: bolder;
  }
  .divUs img {
    width: 30%;
  }
  @media (max-width: 1064px) {
    .divUs img {
      width: 40%;
    }
    .divUs {
      width: 350px;
    }
  }

  @media (max-width: 770px) {
    .divUs img {
      width: 50%;
    }
    .divUs {
      width: 350px;
    }
  }
  @media (max-width: 750px) {
    padding:15px;
    .divUs {
      display: none;
    }
    .textAbout{
        width:90%;
    }
  }
`;
