import styled from "styled-components";


export const DivGrey = styled.div`
  background-color: var(--grey-1);
  width: 95%;
  margin: 30px auto;

  border-radius: 5px;
  border: 1px solid #1E1E1E;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
;

  h3 {
        font-weight: 700;
        font-size: 16px;
        margin: 10px;
  }
`;

export const DivCard = styled.li`
    background-color: #ffffff;
    margin: 30px auto;
    width: 180px;
    padding: 15px;
    
    border-radius: 5px;
    border: 1px solid #1E1E1E;
    

    display: flex;
    flex-direction: column;
    

    .cardInfo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 15px;

        img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }

    .Trash {
        width: 30px;
        height: 30px;
        margin: 0 auto;
    }

    .seeDetails {
        background-color: var(--color-primary);
        color: #ffffff;
        font-size: 10px;
        font-weight: 700;

        padding: 8px;
        border-radius: 5px;
        border:transparent;

        width: 70%;
        margin: 0 auto;
    }
;
`

export const DivFilters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 0px auto 20px auto;
  border-top: 2px solid var(--color-primary);

  width: 95%;

  .selectFilter {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-bottom: 15px;
    width: 100%;
    padding-top: 30px;

    select {
        margin-right: 5px;

        border: 1px solid var(--color-primary);
        border-radius: 8px;

        padding: 4px;
    }
  }

  .searchBar {
    width: 100%;

    .searchBarInput {
        border: 1px solid var(--color-primary);
        border-radius: 8px;

        padding: 4px;

        display: flex;
        justify-content: space-between;

        input {
            border: transparent;
        }
    }
  }
`;



