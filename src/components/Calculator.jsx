import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState(0)

    const inputNum = (e) => {
        var input = e.target.value;
        if (num === 0) {
            setNum(input)
        } else {
            setNum(num + input)
        }


    }

    const clearBtn = (e) => {
        e.preventDefault()
        setNum(0)
    }

    function porcentage() {
        setNum(num / 100)
    }

    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num))
        } else if (operator === "x"){
            setNum(parseFloat(oldNum) * parseFloat(num))
        } else if (operator === "+"){
            setNum(parseFloat(oldNum) + parseFloat(num))
        } else if (operator === "-"){
            setNum(parseFloat(oldNum) - parseFloat(num))
        }

    
    }
  

const operatorHandler = (e) => {
    var operatorInput = e.target.value;
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
}

return (

    <div className='wrapper'>
        <div id="screen">
            <span>{num}</span>
        </div>
        <div className="calc-buttons">
            <div className="calc-btn-row ">
                <button className='calc-btn double gray' onClick={clearBtn}>C</button>
                <button className="calc-btn gray" onClick={porcentage}>%</button>
                <button className='calc-btn gray' onClick={operatorHandler} value={"/"}>/</button>
            </div>
            <div className="calc-btn-row">
                <button className='calc-btn' onClick={inputNum} value={7}>7</button>
                <button className='calc-btn' onClick={inputNum} value={8}>8</button>
                <button className='calc-btn' onClick={inputNum} value={9}>9</button>
                <button className='calc-btn' onClick={operatorHandler} value={"x"}>x</button>
            </div>
            <div className="calc-btn-row">
                <button className='calc-btn' onClick={inputNum} value={4}>4</button>
                <button className='calc-btn' onClick={inputNum} value={5}>5</button>
                <button className='calc-btn' onClick={inputNum} value={6}>6</button>
                <button className='calc-btn' onClick={operatorHandler} value={"-"}>-</button>
            </div>
            <div className="calc-btn-row">
                <button className='calc-btn' onClick={inputNum} value={1}>1</button>
                <button className='calc-btn' onClick={inputNum} value={2}>2</button>
                <button className='calc-btn' onClick={inputNum} value={3}>3</button>
                <button className='calc-btn ' onClick={operatorHandler} value={"+"}>+</button>
            </div>
            <div className="calc-btn-row">
                <button className='calc-btn double' onClick={inputNum} value={0}>0</button>
                <button className='calc-btn' onClick={inputNum} value={"."}>.</button>
                <button className='calc-btn' id='green' onClick={calculate}>=</button>
            </div>

        </div>
    </div>
)
}

export default Calculator