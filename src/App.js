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
        setInput('');
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
                    : btn === 'C'
                    ? clearInput
                    : () => handleButtonClick(btn)
            }
            className={['/', '*', '-', '+', '='].includes(btn) ? 'operator-button' : 'button'}
        >
            {btn}
        </button>
    ))}
    <button onClick={clearInput} className="clear-button">
        Clear
    </button>
</div>

        </div>
    );
}

export default App;




