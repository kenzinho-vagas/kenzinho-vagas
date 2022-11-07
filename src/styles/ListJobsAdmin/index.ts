import styled from "styled-components";

const ListJobsAdmin = styled.div`
  margin: 5px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid black;
  background-color: var(--grey-3);

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
      min-width: 150px;
      width: 40%;
      max-width: 10px;
      min-height: 200px;
      padding: 25px 10px 10px 10px;
      display: flex;
      flex-direction: column;
      cursor: pointer;

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
        top: 5px;
        border: none;
        background-color: transparent;
      }

      :nth-child(1) {
        margin-left: 22%;
      }
      :nth-last-child(1) {
        margin-right: 22%;
      }

      button {
        min-width: 40%;
        width: fit-content;
        font-size: 10px;
      }
    }

    li:focus {
      background-color: aliceblue;
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
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
