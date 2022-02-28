import React,{} from 'react';
import GlobalStyles from "./GlobalStyle";

import { Slots } from './Slots';

//MOVE THE SLOTS TO A NEW COMPONENT
const App = () => (
  <>
    <GlobalStyles />
    <Slots/>
  </>
);

export default App;
