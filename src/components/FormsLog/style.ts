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
  background-color:var(--color-primary);
  border-radius:8px;

  input,
  select {
    background-color: white;
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

  .buttonForm1{
    height: 35px;
    border-radius: 8px;
    border: 1px solid violet;
    background-color: violet;
    margin:10px;
    font-weight:bold;
    cursor: pointer;

  }

  .buttonForm2{
   
    background-color: white;
    margin:10px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid black;
    padding:10px;
    
  }

  a{
    text-decoration: none;
    color:#2C2C2C;
    font-family: Nunito;
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
