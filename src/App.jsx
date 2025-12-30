import { useState } from 'react'
import './App.css'
import MusicTile from './component/musicTile/MusicTile'
import styled, { createGlobalStyle } from "styled-components";
import React from "react";


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










function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <GlobalStyle/>
    <MusicTile/>
    </>
  )
}

export default App
