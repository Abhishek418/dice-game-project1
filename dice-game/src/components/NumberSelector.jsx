import React from "react";
import styled from "styled-components";
export default function NumberSelector({selectedNumber,setSelectedNumber,errored,setErrored}) {
    const arr = [1, 2, 3, 4, 5, 6];
    const BoxElements = arr.map((item, i) => {
        
        return (
            <Box
                style={{backgroundColor: `${selectedNumber === item ? 'black': 'white'}`,cursor: 'pointer', color: `${selectedNumber === item ?  'white': 'black'}`}}
                key={i} onClick={() => {
                    setErrored(false); 
                    setSelectedNumber(item) 
                }}>{item}
            </Box>
        )
    })
    
    return (
        <NumberSelectorContainer>
            {errored && <p className="error_text">You have not selected any number</p>}
            <div className="flex">
                {BoxElements}
            </div>
            <p>select Number</p>
        </NumberSelectorContainer>
    )
}


const NumberSelectorContainer = styled.div`

    display: flex;
    align-items: end;
    flex-direction: column;

    .flex {
        display: flex;
        gap: 24px;
    }
    p {
        font-size: 24px;
        font-weight: 700px;
    }

    .error_text {
        font-size: 24px;
        color: red;
    }
`;


const Box = styled.div`
    height: 76px;
    width: 76px;
    border: 2px solid black;
    font-size: 24px;
    font-weight: 700;
    display: grid;
    place-items: center;
    background-color: ${(props) => { props.isselected ? "black" : "white" }};
`