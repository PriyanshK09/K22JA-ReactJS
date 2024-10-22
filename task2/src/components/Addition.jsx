import React, { useState } from 'react';
import './Addition.css';

function Addition() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleAddition = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleAddition}>Add</button>
      {sum !== null && <h3>Result: {sum}</h3>}
    </div>
  );
}

export default Addition;
