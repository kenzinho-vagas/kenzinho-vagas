import styled from "styled-components";

export const DivLanding = styled.div`
background-color:var(--color-primary);
height: 460px;
color: white;
display: flex;
justify-content: space-between;


.titleLand{
    font-size:40px;
    line-height:60px;
    font-weight: bold;
    margin:20px 0;
}

.div1{
    width:45%;
    padding:40px 0 0 100px ;
    
}
.div2{
    width:55%;
    padding-top:100px;
}

@media (max-width: 700px){

    .div1{
        display:none;
    }
    .titleLand{
    font-size:24px;
    line-height:40px;
    font-weight: bold;
    margin:60px 0;
}
    .div2{
    width:100%;
    padding-top:100px;
    text-align: center;
    padding:15px;
    }

}
`

export const DivOurNumbers = styled.div`
background-color: var(--color-secundary);
height: 390px;
color:var(--color-white);
text-align: center;
align-items: center;

.titleLand2{
    font-size:24px;
    font-weight:bold;
    padding:20px;
    margin-bottom:50px;
}

.listNumbers{
    display: flex;
    justify-content: space-evenly;
    font-weight: bold;
}

.listNumbers li {
    background-color: var(--color-white);
    color: var(--text-color2);
    width: 241px;
    height:110px;
    align-content: center;
    padding-top:60px;
    font-size:22px;
    border-radius: 6px;
}
.listNumbers span{
    color: var(--color-primary);
}

`