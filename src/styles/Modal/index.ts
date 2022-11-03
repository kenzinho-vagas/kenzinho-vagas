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
      max-width: 500px;
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
  }
`