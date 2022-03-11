import React,{useRef, useState} from 'react';
import styled, {ThemeProvider } from 'styled-components';
import { Panel,Button} from 'react95';


const fruits = ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"]
let ongoingGame = false;

export const Game = () => {
    let slotRef = [useRef(null), useRef(null), useRef(null)];
    const [rolling,setRolling] = useState(false)
    const [result,setResult] = useState("-")

    function roll(){
        setResult("-")
        ongoingGame = true;
        setRolling(true)

        let slot1,slot2,slot3 = null;
        slotRef.forEach((slot, i) => {
            const selected = triggerSlotRotation(slot.current);
            if(i+1 === 1){
                slot1 = selected;
            }
            else if(i+1 === 2){
                slot2 = selected;
            }
            else{
                slot3 = selected;
            } 
        });

        setTimeout(() => {
            setRolling(false)
            checkOutcome([slot1,slot2,slot3])
        }, 700)
        
    }

    const triggerSlotRotation = ref => {
        function setTop(top) {
            ref.style.top = `${top}px`;
        }
        let options = ref.children;
        let randomOption = Math.floor(
          Math.random() * fruits.length
        );
        let choosenOption = options[randomOption];
        setTop(-choosenOption.offsetTop + 2);
        return fruits[randomOption];
    };

    //CHECK OUTCOME
    function checkOutcome(slotsArray){
        console.log("CHECKING OUTCOME")
            // let slotsArray = Object.keys(slots).map((key) => [slots[key]]);
            let counts = {};
            for (const fruit of slotsArray) {
                counts[fruit] = counts[fruit] ? counts[fruit] + 1 : 1;
            }
            slotsArray.forEach(fruit => {
                if(ongoingGame){
                    console.log(counts[fruit]);
                    if(counts[fruit] === 2){
                        setResult("WIN DOUBLE!")
                        ongoingGame = false;
                    }else if(counts[fruit] === 3){
                        setResult("WIN TRIPLE")
                        ongoingGame = false;
                    }
                }
            });
    }
    return (
      <>
    <p>{result}</p>
                        <FruitContainers>
                            <Slot variant='well'>
                                <SlotSection>
                                    <FruitContainer ref={slotRef[0]}>
                                    {fruits.map((fruit,i)=>(
                                        <div key={i}>
                                        <span>{fruit}</span>
                                        </div>
                                    ))}
                                    </FruitContainer>
                                </SlotSection>
                            </Slot>
                            <Slot variant='well'>
                                <SlotSection>
                                        <FruitContainer ref={slotRef[1]}>
                                        {fruits.map((fruit,i)=>(
                                            <div key={i}>
                                                <span>{fruit}</span>
                                            </div>
                                        ))}
                                        </FruitContainer>
                                </SlotSection>
                            </Slot>
                            <Slot variant='well'>
                                <SlotSection>
                                    <FruitContainer ref={slotRef[2]}>
                                    {fruits.map((fruit,i)=>(
                                        <div key={i}>
                                        <span>{fruit}</span>
                                        </div>
                                    ))}
                                    </FruitContainer>
                                </SlotSection>
                            </Slot>
                        </FruitContainers>
                        <Button disabled={rolling} onClick={() => roll()}>Roll</Button>
                                    </>
    )
}

const FruitContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`
const SlotSection = styled.section`
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    color: white;
    font-family: sans-serif;
    text-align: center;
    vertical-align: middle;
    top: 2px;
    left: 2px;
    font-size: 40px;
    line-height: 90px;
`
const FruitContainer = styled.div`
    position: relative;
    top: 2px;
    height: 100px;
    width: 100%;
    transition: top ease-in-out 0.7s;
    text-align: center;
`
const Slot = styled(Panel)`
    min-height: 100px;
    min-width: 100px;
    margin: 0px 5px;
`