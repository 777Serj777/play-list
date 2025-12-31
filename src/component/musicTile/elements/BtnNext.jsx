import styled from 'styled-components'
import { useState } from 'react'
import NextIcon from '/Next_009.png'


const StyleBtnNext = styled.button`
    display: flex; 
    position: relative;
    align-items: center; 
    justify-content: center;
    width: 9.8rem;
    height: 9.8rem;
    cursor: pointer;
    background: transparent;
    background-image: url(${NextIcon});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all .3s ease;  
    border: none;

    &:hover{
       filter: brightness(110%);
    }

`;

export default function BtnNext (){

   

    return(
        <>  
            <StyleBtnNext 
                
                onMouseDown={e => e.currentTarget.style.transform = "scale(0.9)"} 
                onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            />  
        </>
    )
}