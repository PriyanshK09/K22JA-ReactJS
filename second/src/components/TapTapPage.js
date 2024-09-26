import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import './TapTapPage.css';

// Create the TapContext
const TapContext = createContext();

const TapProvider = ({ children }) => {
  const [tapCount, setTapCount] = useState(0);

  return (
    <TapContext.Provider value={{ tapCount, setTapCount }}>
      {children}
    </TapContext.Provider>
  );
};

const TapTapPage = () => {
  const { tapCount, setTapCount } = useContext(TapContext);
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const nameInputRef = useRef(null);
  const containerRef = useRef(null);

  const handleTap = useCallback(() => {
    setTapCount(prevCount => prevCount + 1);
  }, [setTapCount]);

  const handleInputClick = useCallback((inputRef) => {
    inputRef.current.style.backgroundColor = 'lightblue';
  }, []);

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleSubmit = () => {
    alert('Form submitted!');
    if (containerRef.current) {
      containerRef.current.style.backgroundColor = 'lightgreen';
    }
  };

  useEffect(() => {
    console.log(`Tap count: ${tapCount}`);
    renderCount.current += 1;
  }, [tapCount]);

  return (
    <div className="tap-tap-container" ref={containerRef}>
      <h1 className="tap-tap-title">Tap-Tap Page</h1>
      <p className="tap-tap-count">Tap Count: {tapCount}</p>
      <p className="tap-tap-render-count">Render Count: {renderCount.current}</p>
      <button className="tap-tap-button" onClick={handleTap}>Tap Me!</button>
      <button className="tap-tap-reset" onClick={() => setTapCount(0)}>Reset</button>
      <button className="tap-tap-decrement" onClick={() => setTapCount(prevCount => Math.max(prevCount - 1, 0))}>Decrement</button>
      <p className="tap-tap-instructions">Tap the button to increase the count.</p>
      <p className="tap-tap-instructions">Check the console to see the updated count.</p>
      <p className="tap-tap-instructions">This is a simple example of using React hooks.</p>

      <h1 className="tap-tap-title">Personal Information</h1>
      <input
        type="text"
        placeholder="Enter your name"
        ref={nameInputRef}
        onClick={() => handleInputClick(nameInputRef)}
        onChange={handleNameChange}
      />
      <button className="tap-tap-submit" onClick={handleSubmit}>Submit</button>
      <p className="tap-tap-instructions">Welcome to Tap-Tap Page! {name}</p>
      <p className="tap-tap-instructions">Click on the input boxes to change their background color.</p>
      <p className="tap-tap-instructions">This is a simple example of using React refs.</p>
    </div>
  );
};

TapTapPage.propTypes = {
  tapCount: PropTypes.number,
  name: PropTypes.string,
};

const AnotherComponent = () => {
  const { tapCount, setTapCount } = useContext(TapContext);

  return (
    <div className="another-component">
      <h2>Another Component (Demonstration of useContext)</h2>
      <p>Tap Count in Another Component: {tapCount}</p>
      <button onClick={() => setTapCount(prevCount => prevCount + 1)}>Increment from Another Component</button>
    </div>
  );
};

const App = () => (
  <TapProvider>
    <TapTapPage />
    <AnotherComponent />
  </TapProvider>
);

export default App;
