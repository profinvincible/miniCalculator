import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScientificMode, setIsScientificMode] = useState(false);
  const [isRadians, setIsRadians] = useState(true);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const clearLastCharacter = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const toggleMode = () => {
    setIsScientificMode(!isScientificMode);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleRadians = () => {
    setIsRadians(!isRadians);
  };

  const handleScientificFunction = (fn) => {
    try {
      const val = eval(input) || 0;
      switch (fn) {
        case "sqrt":
          setInput(Math.sqrt(val).toString());
          break;
        case "sin":
          setInput(isRadians ? Math.sin(val).toString() : Math.sin(val * (Math.PI / 180)).toString());
          break;
        case "cos":
          setInput(isRadians ? Math.cos(val).toString() : Math.cos(val * (Math.PI / 180)).toString());
          break;
        case "tan":
          setInput(isRadians ? Math.tan(val).toString() : Math.tan(val * (Math.PI / 180)).toString());
          break;
        case "log":
          setInput(Math.log10(val).toString());
          break;
        case "ln":
          setInput(Math.log(val).toString());
          break;
        case "exp":
          setInput(Math.exp(val).toString());
          break;
        case "pow":
          setInput(Math.pow(val, 2).toString());
          break;
          case "powXY":
            setInput(input + "**");
            break;
          case "e":
            setInput(Math.E.toString());
            break;
        case "pi":
          setInput(Math.PI.toString());
          break;
        case "factorial":
          setInput(factorial(val).toString());
          break;
          case "asin":
            setInput(isRadians ? Math.asin(val).toString() : (Math.asin(val) * (180 / Math.PI)).toString());
            break;
          case "acos":
            setInput(isRadians ? Math.acos(val).toString() : (Math.acos(val) * (180 / Math.PI)).toString());
            break;
          case "atan":
            setInput(isRadians ? Math.atan(val).toString() : (Math.atan(val) * (180 / Math.PI)).toString());
            break;
        default:
          break;
      }
    } catch {
      setInput("Error");
    }
  };

  const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

  return (
    <div className={`calculator ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="header">
        <button onClick={toggleTheme}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        <button onClick={toggleMode}>{isScientificMode ? "Normal Mode" : "Scientific Mode"}</button>
      </div>

      <input type="text" value={input} readOnly className="input" />

      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "="].map((btn) => (
          <button
            key={btn}
            onClick={btn === "=" ? calculateResult : () => handleButtonClick(btn)}
            className={["/", "*", "-", "+", "="].includes(btn) ? "operator-button" : "button"}
          >
            {btn}
          </button>
        ))}
        <button onClick={() => handleButtonClick("+")} className="operator-button">
          +
        </button>
      </div>

      {/* {isScientificMode && (
        <div className="scientific-buttons">
          <button onClick={toggleRadians}>{isRadians ? "RAD" : "DEG"}</button>
          {["sqrt", "pow", "factorial", "log", "ln", "exp", "pi", "sin", "cos", "tan"].map((fn) => (
            <button key={fn} onClick={() => handleScientificFunction(fn)} className="scientific-button">
              {fn}
            </button>
          ))}
        </div>
      )} */}

{isScientificMode && (
        <div className="scientific-buttons">
          {["RAD/DEG", "sqrt", "pow", "factorial", "log", "ln", "exp", "pi", "e", "powXY", "sin", "cos", "tan", "asin", "acos", "atan"].map(
            (fn, idx) => (
              <button
                key={idx}
                onClick={fn === "RAD/DEG" ? toggleRadians : () => handleScientificFunction(fn)}
                className="scientific-button"
              >
                {fn === "RAD/DEG" ? (isRadians ? "RAD" : "DEG") : fn}
              </button>
            )
          )}
        </div>
      )}

      <div className="clear-buttons">
        <button onClick={clearLastCharacter} className="ac-button">
          AC
        </button>
        <button onClick={clearInput} className="clear-button">
          C
        </button>
      </div>
    </div>
  );
};

export default App;
