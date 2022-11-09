import styled from "styled-components";

export const ButtonPurple = styled.button`
  background-color: var(--color-primary);
  padding: 5px 10px;
  min-width: 60px;
  height: 40px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: var(--color-white);
    color: var(--color-primary);
    transition: 0.5s;
  }

  @media screen and (min-width: 768px) {
    width: 130px;
    font-size: 1rem;
  }
`;

export const ButtonWhite = styled.button`
  background-color: white;
  padding: 5px 10px;
  min-width: 60px;
  height: 40px;
  color: var(--color-primary);
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 130px;
    font-size: 1rem;
  }
`;
