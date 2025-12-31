import styled from 'styled-components'
import { useState } from 'react'
import NextIcon from '/Next_009.png'


const StyleBtnNext = styled.button`
    display: flex; 
    position: relative;
    align-items: center; 
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    cursor: pointer;
    background: transparent;
    background: url(${NextIcon}) center/contain no-repeat;
    transition: all .3s ease;  
    border: none;

    &:hover{
       filter: brightness(110%);
    }
       &:active{
       transform: scale(0.9);
    }

`;

export default function BtnNext (){

   

    return(
        <>  
            <StyleBtnNext 
                
            />  
        </>
    )
}