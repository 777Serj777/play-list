import styled from 'styled-components'
import { useState } from 'react'
import PrevIcon from '/Prev_009.png'


const StyleBtnPrev = styled.button`
    display: flex; 
    position: relative;
    align-items: center; 
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    cursor: pointer;
    background: transparent;
    background-image: url(${PrevIcon});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all .3s ease;  
    border: none;
 

    &:hover{
       filter: brightness(110%);
    }
    &:active{
       transform: scale(0.9);
    }

`;

export default function BtnPrev (){

   

    return(
        <>  
            <StyleBtnPrev 
                
                // onMouseDown={e => e.currentTarget.style.transform = "scale()"} 
                // onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            />  
        </>
    )
}