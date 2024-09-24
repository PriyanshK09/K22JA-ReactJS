import React, { useState, useEffect } from 'react';
import './TapTapPage.css';

const TapTapPage = () => {
  // Step 1: Setup the initial state
  const [tapCount, setTapCount] = useState(0);

  // Step 2: Handle tap events
  const handleTap = () => {
    setTapCount(tapCount + 1);
  };

  // Step 3: Use useEffect to log the number of taps
  useEffect(() => {
    console.log(`Tap count: ${tapCount}`);
  }, [tapCount]);

  // Step 4: Render the UI
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Tap-Tap Page</h1>
      <p>Tap Count: {tapCount}</p>
      <button onClick={handleTap}>Tap Me!</button>
    </div>
  );
};

export default TapTapPage;