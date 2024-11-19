import React, { useState } from 'react';
import { format } from 'date-fns';
import './WeightTracker.css';

function WeightTracker() {
    const [weight, setWeight] = useState('');
    const [weightHistory, setWeightHistory] = useState([]);
    const [averageWeight, setAverageWeight] = useState(0);

    const addWeight = () => {
        const newWeight = parseFloat(weight);
        const newWeightHistory = [...weightHistory, { weight: newWeight, date: format(new Date(), 'dd/MM/yyyy') }];
        const newAverageWeight = (averageWeight * weightHistory.length + newWeight) / (weightHistory.length + 1);
        setWeightHistory(newWeightHistory);
        setAverageWeight(newAverageWeight);
        setWeight('');
    };

    const clearHistory = () => {
        setWeightHistory([]);
        setAverageWeight(0);
    };

    const buttonStyle = {
        margin: '10px 0',
        padding: '10px',
        color: 'black',
        borderRadius: '8px',
        cursor: 'pointer',
        width: '70%',
    };

    return (
        <div>
            <h1>Weight Tracker</h1>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your Weight"
                style={{ width: '70%', padding: '10px', boxSizing: 'border-box' }}
            />
            <br />
            <button
                style={buttonStyle}
                onClick={addWeight}
            >
                Add Weight
            </button>

            <h2>Weight History</h2>
            <ul>
                {weightHistory.map((entry, index) => (
                    <li key={index}>
                        {entry.date}: {entry.weight}kg
                    </li>
                ))}
            </ul>
            <h2>Average Weight: {averageWeight.toFixed(2)}kg</h2>
            <button
                style={buttonStyle}
                onClick={clearHistory}
            >
                Clear History
            </button>
        </div>
    );
}

export default WeightTracker;