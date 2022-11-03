import styled from "styled-components";

export const ButtonPurple = styled.button`
    background-color: var(--color-primary);
    padding: 5px 10px;
    width: 60px;
    height: 30px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    border: 1px solid  var(--color-primary);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    @media screen and (min-width: 768px){
        width: 130px;
        height: 40px;
        font-size: 18px;
    }
`

export const ButtonWhite = styled.button`
    background-color: white;
    padding: 5px 10px;
    width: 60px;
    height: 30px;
    color: var(--color-primary);
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    border: 1px solid  var(--color-primary);;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    @media screen and (min-width: 768px){
        width: 130px;
        height: 40px;
        font-size: 18px;
    }
`