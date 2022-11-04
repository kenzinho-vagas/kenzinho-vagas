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
          
          h3 {
            color: #000000;
            font-weight: 700;
            font-size: 20px;
            text-align: center;
          }
          .iconClose {
            color: var(--color-primary);
            height: 25px;
            display: flex;
          }
        }
      }
    }
  }
  `;

export const ModalEditStyle = styled.div`
box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  
  .divForm {
    border-radius: 5px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);
    color: white;
    padding: 5px;
    position: relative;
    
    .btnCloseModal {
      position: absolute;
      top: 2px;
      right: 5%;
    }
    .formColumn {
      display: flex;
      flex-direction: column;
      gap: 5px;

      input {
        padding: 5px;
      }

      select {
        padding: 5px;
      }
    }

  }
  @media screen and (min-width: 768px){
    .divForm {
      flex-direction: row;
      max-width: 800px;

      .btnCloseModal {
        top: 5%;
        right: 25px;
      }
      form {
        display: flex;
        flex-direction: row;
        width: 100%;

        .formColumn {
          padding: 20px;
          width: 50%;
        }
      }
    }
  }
`