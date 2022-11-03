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
    width:50%
}
.div2{
    width:50%;
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

/* image 1

position: absolute;
width: 576px;
height: 369px;
left: 81px;
top: 132px;

background: url(pretty-freelance-copywriter-texting-message-phone-while-her-colleagues-typing-keyboards-indoor-portrait-young-programmers-different-ethnicities-working-office.jpg);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */

`