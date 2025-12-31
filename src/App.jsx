import { useEffect, useRef, useState } from "react"
import MusicTile from './component/musicTile/MusicTile'
import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import PlayIcon from '/Play_008.png'
import StopIcon  from '/Stop_008.png'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #ffd400;       /* яркий жёлтый */
    --ink: #0f0f0f;      /* чёрный контур */
    --hot: #ff2ca7;      /* неоновый розовый */
    --wave: #ff2ca7;     /* цвет волны */
    --accent: #13d5ff;   /* бирюзовые акценты */
    --play: #ff9e00;     /* оранжевая кнопка */
    
    font-size: 0.625rem;

  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    // background: var(--bg);
    font-family: Inter, sans-serif;
  }
`;




//  function CanvasButton() {
//   const canvasRef = useRef(null)
//   const [active, setActive] = useState(false)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")

//     const img = new Image()
//     img.src = active ? PlayIcon : StopIcon
//     img.onload = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
//     }
//   }, [active])

//   return (
//     <canvas
//       ref={canvasRef}
//       width={156}
//       height={156}
//       style={{ 
//         cursor: "pointer", border: "none" ,
//          transition: "transform 0.2s ease",
//       }}
//       onClick={() => setActive(!active)}
//        onMouseDown={e => e.currentTarget.style.transform = "scale(0.9)"} onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
//     />
//   )
// }









function App() {


  return (
    <>
      
    <GlobalStyle/>
    <MusicTile/>
    </>
  )
}

export default App
