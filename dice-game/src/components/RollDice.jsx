import React from "react";
import styled from "styled-components";
export default function RollDice({currentDice,rollDice}) {
    
    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice_${currentDice}.png`} alt={`dice image`}></img>
            </div>
            <p>Click on dice to roll</p>
        </DiceContainer>
    )
}

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;

    p {
        font-size: 24px;
    }

    .dice {
        cursor: pointer
    }
`