import styled from "styled-components";

const ListJobsAdmin = styled.div`
  margin: 5px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid black;
  background-color: var(--grey-3);
  h2{
    font-size: 18px;
    font-weight: 700;
  }

  ul {
    display: flex;
    overflow-x: auto;
    gap: 80px;
    padding: 20px 0px;

    li {
      position: relative;
      width: 200px;
      margin: 0 calc(50% - width);
      background-color: white;
      border: 1px solid var(--color-primary);
      border-radius: 5px;
      max-width: 200px;
      min-width: 170px;
      width: 50%;
      min-height: 200px;
      padding: 25px 10px 10px 10px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: 0.5s;

      h3 {
        text-align: center;
        font-size: 18px;
        color: var(--color-primary);
        margin-bottom: 20px;
      }

      p {
        display: flex;
        gap: 10px;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 15px;
      }

      .btnDeleteJob {
        position: absolute;
        right: 0;
        transform: translate(50%, -70%);
        top: 5px;
        border: none;
        background: transparent;
        border-radius: 50%;
        height: 35px;
        width: 35px;
      }
      .btnDeleteJob:hover {
        background: #ffffff;
      }
      :nth-child(1) {
        margin-left: 22%;
      }
      :nth-last-child(1) {
        margin-right: 22%;
      }

      .buttonsJob {
        gap: 5px;
      }

      button {
        width: 80px;
        font-size: 10px;
      }

      .btnCandidatesJob {
        width: 80px;
      }
    }

    li:active {
      background: #ffb84e;
    }

    .buttonsJob {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 85%;
    margin: 0 auto;
    padding: 15px;

    ul {
      gap: 50px;
      display: flex;

      li {
        :nth-child(1) {
          margin-left: 50px;
        }
        :nth-last-child(1) {
          margin-right: 50px;
        }
      }
    }
  }
`;

export default ListJobsAdmin;
