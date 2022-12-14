import styled from "styled-components";

export const FormsLog = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey3);
  color: var(--grey-1);
  justify-content: center;
  padding: 10px;
  background-color: var(--color-primary);
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .error{
    font-size: 12px;
    margin-left:10px;
    color: var(--grey-3);
  }
  .divFormCad {
    display: flex;
    gap: 20px;
  }

  .divFormCad div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input,
  select {
    background-color: var(--grey-1);
    border: none;
    margin: 10px;
    padding: 20px;
    font-size: 16px;
    height: 35px;
    border-radius: 4px;
  }
  label {
    margin: 10px;
  }

  .buttonForm1 {
    border-radius: 8px;
    border: 1px solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
    margin: 10px;
    font-weight: bold;
    transition: all 0.5s ease-in;
    color: var(--text-color1);
    cursor: pointer;
    font-size: 15px;
    padding: 10px;
  }
  .buttonForm1:hover {
    border: 1px solid var(--color-secundary);
    background-color: var(--color-secundary);
    color: var(--color-primary);
  }

  .buttonForm2 {
    background-color: var(--grey-1);
    margin: 10px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid var(--grey-2);
    padding: 10px;
    font-weight: bold;
    transition: all 0.5s ease-in;
    color: var(--text-color1);
  }

  .buttonForm2:hover {
    border: 1px solid var(--color-secundary);
    background-color: var(--color-secundary);
    color: var(--color-primary);
  }

  a {
    text-decoration: none;
    color: var(--text-color1);
  }

  @media (max-width: 700px) {
    width: 90%;
    max-width: 600px;
    margin-left: 5px;

    .divFormCad {
      flex-direction: column;
      gap: 0px;
    }
  }
  input,
  select {
    padding: 5px;
    font-size: 14px;
  }
`;
