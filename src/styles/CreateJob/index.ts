import styled from "styled-components";

const Create = styled.div`
    div {
        margin: 25px 5px;
        background-color: var(--grey-1);
        border: 1px solid black;
        border-radius: 5px;

        h3 {
            padding: 5px;
        }
        form {
            margin: 3px;
            padding: 10px 3px 3px 3px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            background-color: var(--color-primary);
            color: white;
            font-weight: 700;
            
            input {
                margin: 5px 0 1rem 0;
                padding: 10px;
            }

            .tecnologies {
                border: none;
                position: relative;
                margin-bottom: 10px;

                .tech {
                    background-color: #B47BFD;
                    position: relative;
                    padding: 10px;
                    border-color: var(--grey-1);
                    display: inline-block;
                }

                #techAdd {
                    position: absolute;
                    right: 5px;
                    bottom: 0;
                }

                .removeTech {
                    position: absolute;
                    display: flex;
                    top: -5px;
                    right: -5px;
                    padding: 5px;
                    background-color: white;
                    border: none;
                    border-radius: 50%;
                    font-size: 8px;
                }
            }

            select {
                margin: 5px 0 1rem 0;
                padding: 10px;
            }

            button {
                background-color: var(--color-secundary);
                padding: 8px;
                font-weight: 700;
            }
        }

        
    }

    @media screen and (min-width: 768px){
        form {
            display: flex;
        }
    }
    
    border-bottom: 2px solid var(--color-primary);
`

export default Create