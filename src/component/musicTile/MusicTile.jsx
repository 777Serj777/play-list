import BtnPlay from "./elements/BtnPlay"
import BtnNext from "./elements/BtnNext"
import BtnPrev from "./elements/BtnPrev"
import ProgressBar from "./elements/ProgressBar"
import styled from "styled-components"

const StyleWrapPlay = styled.div`
    
    display: flex;
    align-items: center;
    margin: 0 auto;

`


export default function MusicTile(){


    return (
        <>
            <StyleWrapPlay>        
                <BtnPrev/>
                <BtnPlay/>
                <BtnNext/>          
            </StyleWrapPlay>
            <ProgressBar/>
        
        </>
    )
}