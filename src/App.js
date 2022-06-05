import React from 'react';
import './index.css';
import wrapper from './components/wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './context/calcContext';

const btnValues = [
  ["C", "+-", "%", "/","√"],
  [7, 8, 9, "x", "disc"],
  [4, 5, 6, "-", 'log'],
  [1, 2, 3, "+","sin"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
       <wrapper>
         <Screen />
         <ButtonBox>
           {btnValues.flat().map((btn, i) =>(
             <Button 
             value={btn}
             key={i}
             />
           ))}
         </ButtonBox>
      </wrapper> 
    </CalcProvider>
  );
}

export default App;
