import styled from "styled-components";

export const DivGrey = styled.div`
  background-color: var(--grey-4);
  width: 95%;
  margin: 30px auto;
  border-radius: 5px;
  border: 1px solid #1e1e1e;

  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-weight: 700;
    font-size: 16px;
    margin: 10px;
  }
  .cards {
    display: flex;
    justify-content: center;
    .containerCards {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .cardList {
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow: scroll;
        gap: 30px;
        justify-content: flex-start;
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 85%;
    .cardList {
      overflow: hidden;
    }
  }
`;

export const DivCard = styled.li`
  background-color: #ffffff;
  margin: 30px auto;
  width: 200px;
  padding: 15px;
`;

export const LiCard = styled.li`
  background-color: #ffffff;
  margin: 30px auto;
  width: 200px;
  padding: 15px;

  border-radius: 5px;
  border: 1px solid #1e1e1e;

  border-radius: 5px;
  border: 1px solid #1e1e1e;

  display: flex;
  flex-direction: column;
  align-items: center;

  .cardInfo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    width: 100%;
    align-items: center;
    margin-bottom: 15px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .trash {
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .seeDetails {
    background-color: var(--color-primary);
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    padding: 8px;
    border-radius: 5px;
    border: transparent;
    width: 70%;
    margin: 0 auto;
  }
`;

export const ContainerFilters = styled.div`
  border-top: 2px solid var(--color-primary);
`

export const DivFilters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0px auto 20px auto;
  width: 95%;
  
  .selectFilter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    width: 95%;
    padding-top: 30px;

    select {
      margin-right: 8px;
      margin-bottom: 8px;

      border: 1px solid var(--color-primary);
      border-radius: 8px;
      padding: 2px;
      font-size: 13px;
    }
  }

  button {
    width: 60px;
    cursor: pointer;
    border-radius: 4px;
    border: solid 1.5px transparent;
    background-color: var(--color-primary);
    color: var(--grey-1);
    padding: 4px;
  }

  button:hover {
    background-color: #fff;
    border: solid 1.5px var(--color-primary);
    color: var(--color-primary);
  }

  .searchBar {
    width: 95%;

    .searchBarInput {
      border: 1px solid var(--color-primary);
      border-radius: 8px;
      padding: 4px;
      display: flex;
      justify-content: space-between;

      width: 100%;

      form {
        display: flex;
        width: 100%;
        justify-content: space-between;

        input {
        border: transparent;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0px;
    padding-top: 20px;
    width: 85%;
    .selectFilter {
      padding-top: 0px;
      margin-bottom: 0px;
      justify-content: flex-start;
      gap: 10px;
    }
    .searchBar {
      width: 60%;
    }
  }
`;
