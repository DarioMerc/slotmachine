import React,{useRef, useState} from 'react';
import styled, {ThemeProvider } from 'styled-components';

import { Panel,Button,Tabs,
    Tab,
    TabBody,
    Window,
    WindowHeader,
    WindowContent, } from 'react95';
import original from "react95/dist/themes/original";
import { Settings } from './Settings';
import { Game } from './Game';


const icons = {
    "fruits":["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"],
    "fruits2":["🍌", "🍋", "🍍", "🥭", "🍈", "🍐"],
    "vegetables":["🥔","🥕","🌽","🥦","🍆","🍅"],
    "grains":["🍞","🥐","🥖","🥨","🥯","🧇"],
    "food":["🍔","🍕","🌭","🌮","🥪","🌯"],
}

export const Slots = () => {
    const [activeTab,setActiveTab] = useState('game');
    const [currentIcons,setCurrentIcons] = useState(icons.fruits)

    function renderSwitch(option){
        switch (option) {
            case "game":
                return <Game icons={icons} currentIcons={currentIcons}/>
                break;
            case "settings":
                return <Settings setCurrentIcons={setCurrentIcons}/>
                break
            default:
                break;
        }
    }
    return (
        <ThemeProvider theme={original}>
        <Container>
            <SlotContainer>
                <WindowHeader>Slots</WindowHeader>
                <WindowContent>
                    <Tabs value={activeTab} onChange={(e,value) => setActiveTab(value)}>
                        <Tab value="game">Play</Tab>
                        <Tab value="settings">Settings</Tab>
                    </Tabs>
                    <TabBody>
                        {renderSwitch(activeTab)}
                    </TabBody>
                </WindowContent>
            </SlotContainer>
        </Container>
    </ThemeProvider>
    )
}

const Container = styled.div`
    width: 33%;
    height: 50%;
    
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
    
    margin: auto;
`
const SlotContainer = styled(Window)`
    min-width: 400px;
    min-height: 400px;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
`