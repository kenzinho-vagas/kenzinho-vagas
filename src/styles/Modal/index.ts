import styled from "styled-components";

export const DivModal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  .containerModal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.35);

    .overlayModal {
      width: 90%;
      min-width: 300px;
      max-width: 700px;
      position: relative;
      display: flex;
      justify-content: center;

      .modal {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #ffffff;
        border-radius: 4px;

        .modalHeader {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          margin: 20px;
          margin-bottom: 15px;
          width: 90%;

          .modalHeaderTitle {
            display: flex;
            justify-content: center;
            width: 100%;

            h3 {
            color: #000000;
            font-weight: 700;
            font-size: 20px;
            text-align: center;
          }
          }
          
          .modalHeaderBtn {
            display: flex;
            width: 10%;
            justify-content: flex-end;

            .iconClose {
            color: var(--color-primary);
            height: 25px;
            display: flex;
          }
          }
          
        }
      }
    }
  }
`;

export const DivForm = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-primary);
  border-radius: 4px;

  margin-bottom: 1.5rem;
  padding: 8px;

  form {
      display: flex;
      flex-direction: column;
      width: 90%;

    .formColumns {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      margin-bottom: 15px;
      padding-top: 20px;

      .formLeft {
        display: flex;
        flex-direction: column;

        width: 100%;

        label {
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          
          margin-bottom: 5px;
        }

        input {
          margin-bottom: 20px;
          padding: 8px;
          border-radius: 4px;
        }

        input::placeholder {
          font-size: 14px;
          color: #000000;
        }
      }

      .formRight {
        display: flex;
        flex-direction: column;

        width: 100%;

        label {
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          
          margin-bottom: 5px;
        }
        
        input, select {
          margin-bottom: 20px;
          padding: 8px;
          border-radius: 4px;

          font-size: 16px;
          color: #000000;
        }

       
      }

      @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 30px;
      }
    }

    button {
      background-color: var(--color-secundary);
      border: transparent;
      border-radius: 4px;

      margin-bottom: 20px;
      padding: 8px;

      color: #000000;
      font-weight: 700;
      font-size: 14px;
    }
  }
    
`