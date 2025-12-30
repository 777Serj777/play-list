import { useState } from "react";
import styled from "styled-components";
import { useState } from 'react'
const StyleProgressBar = styled.div`
    width: 40rem;
    height: 60rem;
    background: #f18cc7;
    border-radius: 1rem;

`;
const BtnPlay = styled.div`
    display: flex; 
    position: relative;
    align-items: center; 
    justify-content: center;
    width: 9.8rem;
    height: 9.8rem;
    cursor: pointer;
    background-image: url("/Play_008.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all .3s ease;  
  

    &:hover{
    width: 10rem;
    height: 10rem;
    filter: brightness(110%);

    }
 
`;

export default function ProgressBar (){

    const [state, setState] = useState

    return(
        <>
            <StyleProgressBar>
                <BtnPlay/>
            </StyleProgressBar>
        </>
    )
}