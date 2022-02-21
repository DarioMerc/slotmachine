import React,{} from 'react';
import styled, {ThemeProvider } from 'styled-components';
import GlobalStyles from "./GlobalStyle";

import { Panel,TextField,Button } from 'react95';
import original from "react95/dist/themes/original";
import { Slots } from './Slots';

//MOVE THE SLOTS TO A NEW COMPONENT
const App = () => (
  <>
    <GlobalStyles />
    <Slots/>
  </>
);

export default App;
