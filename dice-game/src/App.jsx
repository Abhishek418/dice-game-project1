import { useState } from 'react'
import './App.css'
import styled from "styled-components"

function App() {
  const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
  `

  return (
    <>
      <Button>Styled Button</Button>
    </>
  )
}

export default App
