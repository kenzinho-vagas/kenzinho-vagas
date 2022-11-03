import styled from "styled-components";

export const DivModaldetails = styled.div`
  padding: 20px;

  .modalTitle {
    color: var(--color-primary);
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
  }

  .technologies {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 30px;

    li {
      color: var(--color-primary);
      font-size: 20px;
      font-weight: 500;
      border: 1px solid var(--color-primary);
      padding: 10px;
      border-radius: 8px;
      list-style: none;
    }
  }

  .infoJobs {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 30px;

    .infoJobsDetail {
        display: flex;
        flex-direction: column;
        align-items: center;

      img {
        margin-bottom: 10px;
        width: 30px;
        height: 30px;
      }
    }
  }

  .description {
    background-color: #D9D9D9;
    padding: 20px;
    margin-bottom: 30px;
    border: 1px solid #000000;
    border-radius: 4px;

    p {
        line-height: 24px;
    }
  }

  .btnModal {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }
`;
