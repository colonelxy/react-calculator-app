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
        "√" : 'ext',
        "disc" : 'ext',
        "log": 'ext',
        "sin": 'ext'

        
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
// User click number



const handleClickButton = () => {
    const numberString = value.toString()

    let numberValue;
    if(numberString==="0"&& calc.num===0){
        numberValue="0" //The first condition ensures it doesn't show multiple zeros unnecessarily
        
    } else {
        numberValue = Number(calc.num + numberString) //The else condition appends the new button click to what's on the calc screen
    }
    setCalc({
        ...calc,
       num:numberValue 
    })
}

//User click sign operation
const signClick = () => {
    setCalc({
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0
    })
}

//User equals click
const equalsClick = () => {
    if (calc.res && calc.num) {
        const math = (a, b, sign) => {
            const result = {
                "+": (a, b) => a + b,
                "-": (a, b) => a - b,
                "x": (a, b) => a * b,
                "/": (a, b) => a / b,
                
            }
            return result[sign](a, b);
        }
        setCalc({
            res: math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0
        })
    }
}

//User click percent
const percentClick = () => {
    setCalc({
        num: (calc.num/100),
        res: (calc.res/100),
        sign: ''
    })
}

//User click invert button
const invertClick = () => {
    setCalc({
        num: calc.num ? calc.num * -1 : 0,
        res:calc.res? calc.res * -1 : 0,
        sign: ""
    })
}
//User click root
const sqrtClick = () => {
    setCalc({
        num: Math.sqrt(calc.num),
        res: Math.sqrt(calc.res)
    })
}

    const handleBtnClick = ()=> {
        const results = {
            ".": commaClick,
            "C" : resetClick,
            "/" : signClick,
            "x" : signClick,
            "-" : signClick,
            "+" : signClick,
            "=" : equalsClick,
            "%" : percentClick,
            "+-": invertClick, 
            "√"  : sqrtClick    }
        if (results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }
  return (
   <button  onClick={handleBtnClick} className={`${getStyleName(value)} button`}>
       {value}
   </button>
  )
}

export default Button