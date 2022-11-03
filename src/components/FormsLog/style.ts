import styled from "styled-components";

export const FormsLog = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey3);
  color: var(--color-grey0);
  justify-content: center;
  padding: 10px;

  input,
  select {
    background-color: var(--color-grey2);
    border: none;
    color: var(--color-grey0);
    margin: 10px;
    padding: 20px;
    font-size: 16px;
    height: 40px;
    border-radius: 4px;
  }
  label {
    margin: 10px;
  }

  @media (max-width: 700px) {
    width: 90%;
    max-width:400px;
  }
  input,
  select {
    padding: 5px;
    font-size: 14px;
  }
`;
