import { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
    const [displayValue, setDisplayValue] = useState('');


    const appendToDisplay = (input) => {
        setDisplayValue(displayValue + input);
    };

    const clearDisplay = () => {
        setDisplayValue('');
    };

    const calculate = () => {
        try {
            setDisplayValue(eval(displayValue)); 
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    return (
        <div className="container">
            <div className="calculator-header">
                <p>calculator</p>
                <button className="onOff">ON | OFF</button>
            </div>
            <div className="calculator">
                <hr className="gray" />
                <div className="calculator-display">
                    <input id="display" readOnly value={displayValue} />
                </div>
                <hr className="green" />
                <hr className="blue" />
                <div className="calculator-buttons">
                    <button onClick={() => appendToDisplay('+')} className="operator-btn">+</button>
                    <button onClick={() => appendToDisplay('7')} className="number-btn">7</button>
                    <button onClick={() => appendToDisplay('8')} className="number-btn">8</button>
                    <button onClick={() => appendToDisplay('9')} className="number-btn">9</button>
                    <button onClick={() => appendToDisplay('-')} className="operator-btn">-</button>
                    <button onClick={() => appendToDisplay('4')} className="number-btn">4</button>
                    <button onClick={() => appendToDisplay('5')} className="number-btn">5</button>
                    <button onClick={() => appendToDisplay('6')} className="number-btn">6</button>
                    <button onClick={() => appendToDisplay('*')} className="operator-btn">*</button>
                    <button onClick={() => appendToDisplay('1')} className="number-btn">1</button>
                    <button onClick={() => appendToDisplay('2')} className="number-btn">2</button>
                    <button onClick={() => appendToDisplay('3')} className="number-btn">3</button>
                    <button onClick={() => appendToDisplay('/')} className="operator-btn">/</button>
                    <button onClick={() => appendToDisplay('0')} className="number-btn">0</button>
                    <button onClick={() => appendToDisplay('.')} className="number-btn">.</button>
                    <button onClick={calculate} className="operator-btn">=</button>
                </div>
                <button onClick={clearDisplay} className="clear-btn">C</button>
            </div>
        </div>
    );
};

export default Calculadora;
