import React from 'react';
import { CalcContext } from '../context/calcContext';
import { useContext } from 'react';

const getStyleName = btn => {
    const classname = {
        "=": 'equals',
        "x": 'opt',
        "-": 'opt',
        "+": 'opt',
        "/": 'opt',
        
    }
    return classname[btn]
}

const Button = ({value}) => {
    const { calc, setCalc }
= useContext(CalcContext);

    //User click comma
const commaClick = () => {
    setCalc({
        ...calc,
        
        num: !calc.num.toString().includes('.') ? calc.num + value: calc.num
    })
}
//User click C
const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0})
}
    const handleBtnClick = ()=> {
        const results = {
            ".": commaClick,
            "C" : resetClick
        }
        return results[value]()
    }
  return (
   <button  onClick={handleBtnClick} className={`${getStyleName(value)} button`}>
       {value}
   </button>
  )
}

export default Button