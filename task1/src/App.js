import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";

const ThemeContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(`Counter value changed: ${counter}`);
  }, [counter]);

  return (
    <div className={`App ${theme}`}>
      <div className="counter-container">
        <h1>Counter: {counter}</h1>
        <div className="button-group">
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={() => setCounter(counter - 1)}>Decrement</button>
          <button onClick={toggleTheme}>
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
