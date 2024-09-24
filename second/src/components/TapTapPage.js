import React, { useState, useEffect, useRef } from 'react';
import './TapTapPage.css';

const TapTapPage = () => {
  const [tapCount, setTapCount] = useState(0);
  const renderCount = useRef(0);

  const handleTap = () => {
    setTapCount(tapCount + 1);
  };

  useEffect(() => {
    console.log(`Tap count: ${tapCount}`);
  }, [tapCount]);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="tap-tap-container">
      <h1 className="tap-tap-title">Tap-Tap Page</h1>
      <p className="tap-tap-count">Tap Count: {tapCount}</p>
      <p className="tap-tap-render-count">Render Count: {renderCount.current}</p>
      <button className="tap-tap-button" onClick={handleTap}>Tap Me!</button>
      <button className="tap-tap-reset" onClick={() => setTapCount(0)}>Reset</button>
      <button className="tap-tap-decrement" onClick={() => setTapCount(tapCount - 1)}>Decrement</button>
      <p className='tap-tap-instructions'>Tap the button to increase the count.</p>
      <p className='tap-tap-instructions'>Check the console to see the updated count.</p>
      <p className='tap-tap-instructions'>This is a simple example of using React hooks.</p>
    </div>
  );
};

export default TapTapPage;