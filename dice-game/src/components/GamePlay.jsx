import React from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector"
import styled from "styled-components"
import RollDice from "./RollDice";
import Rules from "./Rules";
export default function GamePlay() {
    const [selectedNumber, setSelectedNumber] = React.useState();
    const [currentDice, setCurrentDice] = React.useState(1);
    const [score, setScore] = React.useState(0);
    const [errored, setErrored] = React.useState(false);
    const [isRuleVisible,setIsRuleVisible] = React.useState(false);

    const resetGame = () => {
        setCurrentDice(1);
        setScore(0);
        setSelectedNumber(undefined);
    }

    const rollDice = () => {

        //if no number is selected then user should not be able to roll the dice
        if (selectedNumber == undefined) {
            setErrored(true)
            return;
        }

        const randomNum = generateRandomNumber(1, 7);
        setCurrentDice(prev => randomNum);

        //check if selected number is equal to the currentDice outcome
        if (selectedNumber == randomNum) {
            setScore(prevScore => prevScore + randomNum)
        } else {
            setScore(prevScore => prevScore - 2);
        }
    }

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <MainContainer>
            <div className="top_section">
                <Score score={score} />
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} errored={errored} setErrored={setErrored} />
            </div>
            <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice} rollDice={rollDice} />
            <ControlContainer>
                <Button onClick={resetGame}>Reset Score</Button>
                <Button className="rule_btn" onClick={() => {setIsRuleVisible(prevVal => !prevVal)}}>{isRuleVisible ? 'Hide': 'Show'} Rules</Button>
                {isRuleVisible && <Rules />}
            </ControlContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    .top_section {
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding: 30px;
    }
`

const ControlContainer = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .rule_btn {
        background-color: black;
        color: white;
    }
`;

const Button = styled.button`
    padding: 18px 70px;
    font-size: 15px;
    border: 3px solid black;
    background-color: white;
    color: black;
    border-radius: 5px;
    width: 240px;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover {
        background-color: #e8b4b4;
    }
`;


