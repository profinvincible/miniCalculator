import './App.css';


import React, { useState } from 'react';
import './App.css';

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
                {/* AC Button */}
                <button onClick={clearInput} className="clear-button">
                    C
                </button>
                {/* Clear Button */}
                <button onClick={clearLastCharacter} className="ac-button">
                    AC
                </button>
            </div>
        </div>
    );
}

export default App;






