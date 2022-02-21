import React,{useRef} from 'react';
import styled, {ThemeProvider } from 'styled-components';
import GlobalStyles from "./GlobalStyle";

import { Panel,TextField,Button } from 'react95';
import original from "react95/dist/themes/original";

const fruits = ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"]

export const Slots = () => {
    let slotRef = [useRef(null), useRef(null), useRef(null)];
    return (
        <ThemeProvider theme={original}>
        <Container>
            <SlotContainer>
                <h1>Slots</h1>
                <p>-</p>
                <FruitContainers>
                        <SlotSection>
                            <FruitContainer ref={slotRef[0]}>
                            {fruits.map((fruit,i)=>(
                                <div key={i}>
                                <span>{fruit}</span>
                                </div>
                            ))}
                            </FruitContainer>
                        </SlotSection>
                        <SlotSection>
                                <FruitContainer ref={slotRef[1]}>
                                {fruits.map((fruit,i)=>(
                                    <div key={i}>
                                    <span>{fruit}</span>
                                    </div>
                                ))}
                                </FruitContainer>
                        </SlotSection>
                        <SlotSection>
                            <FruitContainer ref={slotRef[2]}>
                            {fruits.map((fruit,i)=>(
                                <div key={i}>
                                <span>{fruit}</span>
                                </div>
                            ))}
                            </FruitContainer>
                        </SlotSection>
                </FruitContainers>
                <div style={{display: 'flex'}}>
                    <TextField placeholder='Bet'/>
                    <Button>Roll</Button>
                </div>
            </SlotContainer>
        </Container>
    </ThemeProvider>
    )
}

const Container = styled.div`
    width: 20%;
    height: 40%;
    background-color: red;
    
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    
    margin: auto;
`
const SlotContainer = styled(Panel)`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FruitContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`
const SlotSection = styled.section`
    width: 70px;
    height: 70px;
    overflow: hidden;
    line-height: 50px;
    margin: 3px;
`
const FruitContainer = styled(Panel)`
    height: 100%;
    width: 100%;
    font-size: xx-large;
    transition: top ease-in-out 0.7s;
    text-align: center;
    padding: 10px;
`