import styled from 'styled-components';

const Welcome = styled.div`
    font-size: 18px;
    font-weight: 700;

    padding: 50px 20px;

    border-bottom: 2px solid var(--color-primary);
    
    @media screen and (min-width: 768px){
        font-size: 24px;
    }
`

export default Welcome