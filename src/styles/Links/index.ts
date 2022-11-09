import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkPrimary = styled(Link)`
  background-color: var(--color-primary);
  padding: 5px 10px;
  width: 60px;
  height: 30px;
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
  transition: 0.5s;

  :hover {
    color: var(--color-primary);
    background-color: var(--color-white);
    transition: 0.5s;
  }

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const LinkSecundary = styled(Link)`
  background-color: white;
  padding: 5px 10px;
  width: 60px;
  height: 30px;
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
  transition: 0.5s;

  :hover {
    color: var(--color-white);
    background-color: var(--color-primary);
    transition: 0.5s;
  }

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 40px;
    font-size: 1rem;
  }
`;
