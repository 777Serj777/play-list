import { useState, useEffect   } from "react";
import styled from "styled-components";


const StyleProgressBar = styled.div.attrs(props => (
    { 
        style: { 
          '--progress': props.$positionBtn + '%',
        }, 
    }))`
    
    position: relative;
    width: 50%;
    height: .6rem;
    background-color: black;
    border-radius: 1rem;
    margin: 0 auto;

    &::after{
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: var(--progress);
        transform: translateY(-.45rem);
        background-color: #A11282;
        border-radius: 50%;
        cursor: pointer;
    }
`;



export default function ProgressBar (){

    const [state, setState] = useState(0)
    const [dragging, setDragging] = useState(false)
 
    const eventDownMouse = (e) => {

      
        setDragging(true)
        const bar = document.querySelector("#bar") 
        const rect = bar.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percent = Math.min(Math.max(x / rect.width, 0), 1) * 100
        setState(percent - 1.5)
   
     
        
        
    }




  useEffect(() => {
    const handleMouseUp = (e) => {
        setDragging(false)
    }
    const handleMouseMove = (e) => 
    { 
       
        
        if(dragging){
            const bar = document.querySelector("#bar") 
            const rect = bar.getBoundingClientRect()
            const x = e.clientX - rect.left
            const percent = Math.min(Math.max(x / rect.width, 0), 1) * 100
            setState(percent - 1.5)
            console.log(percent)
        }
    } 
     
  
     
    window.addEventListener("mousemove", handleMouseMove) 
    window.addEventListener("mouseup", handleMouseUp)
 

    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mousemove", handleMouseMove)
   
    }
  }, [dragging])

 



    return(
        <> 
            < StyleProgressBar 
                id="bar" 
                $positionBtn = {state} 
            
                onMouseDown = {eventDownMouse} 
             
            />
        </>
    )
}