import styled from "styled-components";

const Create = styled.div`
  .divCreate {
    margin: 25px 5px;
    background-color: var(--grey-1);
    border: 1px solid black;
    border-radius: 5px;

    h3 {
      padding: 5px;
    }
    form {
      position: relative;
      margin: 3px;
      padding: 15px 8px 3px 8px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      background-color: var(--color-primary);
      color: white;
      font-weight: 700;

      .formColumn {
        display: flex;
        flex-direction: column;
        border: none;
      }
      input {
        margin: 5px 0 1rem 0;
        padding: 10px;
      }

      select {
        margin: 5px 0 1rem 0;
        padding: 10px;
      }

      button {
        margin-top: 10px;
        background-color: var(--color-secundary);
        border-radius: 5px;
        padding: 8px;
        font-weight: 700;
      }

      textarea {
        height: 230px;
        padding: 10px;
      }
    }

    @media screen and (min-width: 500px) {
      max-width: 540px;
      margin: 25px auto;

      form {
        padding: 10px 30px;
      }
    }

    @media screen and (min-width: 768px) {
      max-width: unset;
      form {
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 20px 40px;

        input {
          width: 80%;
        }

        #tecnology {
          width: 80%;
        }
      }

      .formColumn {
        width: 48%;
        gap: 5px;
      }

      #btnSaveJob {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .divCreate {
      width: 80vw;
      margin: 25px auto;
      padding: 10px 10px 20px 10px;
    }
  }

  @media screen and (min-width: 1100px) {
    .divForm {
      padding: 0 20%;
    }
  }

  border-bottom: 2px solid var(--color-primary);
`;

export default Create;
