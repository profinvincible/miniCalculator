import './App.css';
import React, { useState } from 'react';


function App() {
    const [input, setInput] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput(''); // Clears the entire input
    };

    const clearLastCharacter = () => {
        setInput(input.slice(0, -1)); // Clears the last character
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput('Error');
        }
    };

    // Scientific functions
    const handleScientificFunction = (fn) => {
        switch (fn) {
            case 'sqrt':
                setInput(Math.sqrt(eval(input)).toString());
                break;
            case 'pow':
                setInput(Math.pow(eval(input), 2).toString()); // Power of 2
                break;
            case 'sin':
                setInput(Math.sin(eval(input)).toString());
                break;
            case 'cos':
                setInput(Math.cos(eval(input)).toString());
                break;
            case 'tan':
                setInput(Math.tan(eval(input)).toString());
                break;
            case 'log':
                setInput(Math.log10(eval(input)).toString());
                break;
            case 'factorial':
                setInput(factorial(eval(input)).toString());
                break;
            default:
                break;
        }
    };

    // Factorial Function
    const factorial = (n) => {
        if (n < 0) return 'Error'; 
        return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`calculator ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <button onClick={toggleTheme} className="toggle-button">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <input
                type="text"
                value={input}
                readOnly
                className="input"
            />
            <div className="buttons">
                {/* Add Scientific Buttons */}
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                    <button
                        key={btn}
                        onClick={
                            btn === '='
                                ? calculateResult
                                : btn === 'AC'
                                ? clearLastCharacter
                                : () => handleButtonClick(btn)
                        }
                        className={['/', '*', '-', '+', '='].includes(btn) ? 'operator-button' : 'button'}
                    >
                        {btn}
                    </button>
                ))}
                {/* Scientific function buttons */}
                {['sqrt', 'pow', 'sin', 'cos', 'tan', 'log', 'factorial'].map((fn) => (
                    <button key={fn} onClick={() => handleScientificFunction(fn)} className="scientific-button">
                        {fn}
                    </button>
                ))}
                <button onClick={clearInput} className="clear-button">
                    C
                </button>
                <button onClick={clearLastCharacter} className="ac-button">
                    AC
                </button>
            </div>
        </div>
    );
}

export default App;
