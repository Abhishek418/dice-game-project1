import React from 'react';
import './App.css'
import styled from "styled-components"
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay' 

function App() {
  const [isGameStarted,setIsGameStarted] = React.useState(false);

  const toggleGamePlay = function () {
    setIsGameStarted(prevValue => !prevValue);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggleGame={toggleGamePlay}/>}
    </>
  )
}

export default App
