import styled from "styled-components";

const JobsAdminStyle = styled.div`
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  .filterLeft {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .filterRight {
    display: flex;
    justify-content: space-between;
  }

  select {
    padding: 10px;
    border-color: var(--color-primary);
    border-radius: 5px;
    min-width: 120px;
  }

  form {
    display: flex;
    gap: 10px;
    border: 1px solid var(--color-primary);
    padding: 5px;
    border-radius: 8px;
    box-sizing: border-box;
  }

  input {
    padding: 10px;
    width: 90%;
    border-radius: 8px;
    margin: 0 auto;
    outline: none;
    border: none;
  }

  form button {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: 1px solid var(--color-primary);
    border-radius: 5px;
    transition: 0.5s;

    :hover {
      background-color: var(--color-white);
      color: var(--color-primary);
      transition: 0.5s;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 20px 0;

    flex-direction: row;
    justify-content: space-between;

    width: 85%;
    margin: 0 auto;

    .searchSelect {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
    .filterLeft {
      justify-content: flex-start;
      gap: 1rem;
    }
    .filterRight {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default JobsAdminStyle;
