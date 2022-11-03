import styled from "styled-components";

const JobsAdminStyle = styled.div`
    padding: 10px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    .filterLeft {
        display: flex;
        justify-content: space-between;
    }
    
    .filterRight {
        display: none;
    }

    select {
        padding: 10px;
        border-color: var(--color-primary);
        border-radius: 5px;
        min-width: 120px;
    }

    input {
        padding: 10px;
        width: 90%;
        border-radius: 8px;
        border: 1px solid var(--color-primary);
        margin: 0 auto;
    }

    @media screen and (min-width: 768px){
        padding: 20px 0;

        flex-direction: row;
        justify-content: space-between;

        width: 85%;
        margin: 0 auto;

        .searchSelect {
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
        .filterLeft {
            justify-content: flex-start;
            gap: 1rem;
        }
        .filterRight {
            display: flex;
            gap: 1rem;
        }
    }
`

export default JobsAdminStyle