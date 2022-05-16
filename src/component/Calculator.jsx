import React, { useState } from 'react'
import "./calculator.css"
import ToggleTheam from './ToggleTheam';
const Calculator = () => {

    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const opers = [ '/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if  (
                opers.includes(value) && calc === '' ||
                opers.includes(value) && opers.includes(calc.slice(-1))
            ) {
                return;
            }
            setCalc(calc + value);
            if(!opers.includes(value)) {
                setResult(eval(calc + value).toString());
            }
    }

    const createDigits = () => {

        const digits = [];

        for(let i = 1; i < 10; i++) {
            digits.push(
                <button 
                    onClick={()=> updateCalc(i.toString())}
                    key={i}>
                        {i}
                </button>
                
            )
            
        }
        return digits
    }

    const handleCalc = () => {
        setCalc(eval(calc).toString());
    }

    const handleDelete = () => {
        if(calc == '') {
            return;
        }
        const value = calc.slice(0, -1);

        setCalc(value);
        setResult(value);
    }

    return (
      <div className="main-div">
          <div className="calculator">
              <ToggleTheam />
              <div className="display">
                  {result ? <span>({result})</span> : ''}&nbsp;
                  {calc || '0'}
              </div>

              <div className="operations">
                  <button onClick={()=> updateCalc('/')}>/</button>
                  <button onClick={()=> updateCalc('*')}>*</button>
                  <button onClick={()=> updateCalc('+')}>+</button>
                  <button onClick={()=> updateCalc('-')}>-</button>
                  
                  <button onClick={handleDelete}>DEL</button>
              </div>

              <div className="digits">
                  {createDigits()}
                  <button onClick={()=> updateCalc('0')}>0</button>
                  <button onClick={()=> updateCalc('.')}>.</button>
                  <button onClick={handleCalc}> = </button>
              </div>
          </div>
      </div>
    )
}

export default Calculator