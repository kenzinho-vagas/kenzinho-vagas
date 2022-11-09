import styled from "styled-components";

export const Loading = styled.div `
    background: var(--color-secundary);
    
    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }

    .loading:after {
        content: " ";
        border-radius: 50%;
        margin: 8px;
        border: 32px solid var(--color-primary);
        border-color: var(--color-primary) transparent var(--color-primary) transparent;
        animation: loading 1.2s infinite;
    }

    @keyframes loading {
        0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
            transform: rotate(900deg);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
            transform: rotate(1800deg);
        }
    }
`