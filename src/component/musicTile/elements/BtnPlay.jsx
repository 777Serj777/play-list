import styled from 'styled-components'
import { useState } from 'react'
import PlayIcon from '/Play_01.png'
import StopIcon  from '/Stop_01.png'

const StyleBtnPlay = styled.button`
    display: flex; 
    position: relative;
    align-items: center; 
    justify-content: center;
    width: 8.8rem;
    height: 8.8rem;
    margin: 0 3rem;
    cursor: pointer;
    background: transparent;
    background-image: ${props => (props.$active ? `url(${PlayIcon})`: `url(${StopIcon})`)};
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

export default function BtnPlay (){

    const [activePlayer, setActivePlayer] = useState(false);

    const clickPlayer =  () => activePlayer ? setActivePlayer(false) : setActivePlayer(true);

    return(
        <>  
            <StyleBtnPlay 
                onClick = {clickPlayer} 
                $active = {activePlayer} 
            />  
        </>
    )
}