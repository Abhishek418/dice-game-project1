import React from "react";
import styled from "styled-components";
export default function StartGame(props) {

    const {toggleGame} = props;

    return <>
        <Container>
            <div>
                <img src="/images/dices.png" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={() => {
                    toggleGame();
                }}>Play Now</Button>
            </div>
        </Container>
    </>
}

const Container = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;



const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 10px 18px;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
        cursor: pointer;
    }
`