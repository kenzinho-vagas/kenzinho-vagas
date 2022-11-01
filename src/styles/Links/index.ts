import {Link} from "react-router-dom";
import styled from "styled-components";

export const LinkPrimary = styled(Link)`
    background-color: var(--color-primary);
    padding: 5px 10px;
    width: 80px;
    height: 30px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    border-color: var(--color-primary);

    @media screen and (min-width: 768px){
        width: 130px;
        height: 40px;
    }
`

export const LinkSecundary = styled(Link)`
    background-color: white;
    padding: 5px 10px;
    width: 80px;
    height: 30px;
    color: var(--color-primary);
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    border-color: var(--color-primary);

    @media screen and (min-width: 768px){
        width: 130px;
        height: 40px;
    }
`