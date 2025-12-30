import styled from 'styled-components'
import { useState } from 'react'

const StyleBtnPlay = styled.button`
    display: flex; 
    position: relative;
    align-items: center; 
    justify-content: center;
    width: 9.8rem;
    height: 9.8rem;
    cursor: pointer;
    background-image: ${props => (props.$active ? `url("/Play_008.png")`: `url("/Stop_008.png")`)};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all .3s ease;  
    border: none;

    &:hover{
        width: 10rem;
        height: 10rem;
        filter: brightness(110%);

    }
 
`;

export default function BtnPlay (){



    const [activePlayer, setActivePlayer] = useState(false);

    const clickPlayer =  () => activePlayer ? setActivePlayer(false) : setActivePlayer(true);

    return(
        <>  
            <StyleBtnPlay onClick = {clickPlayer} $active = {activePlayer}/>  
        </>
    )
}