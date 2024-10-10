import React, { useState, useMemo, useEffect } from 'react';
import './Usememo.css';

function Usememo() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);
    const [delayedMultiply, setDelayedMultiply] = useState(0);

    const multiply = useMemo(() => {
        console.log("Multiplication");
        return add * 5;
    }, [add]);

    useEffect(() => {
        const delay = setTimeout(() => {
            console.log("🚀 ~ file: Usememo.jsx ~ line 14 ~ delayedMultiply ~ multiply", multiply);
            for (let i = 0; i < 1000000000; i++) {} // Deliberate loop to slow down execution
            setDelayedMultiply(multiply);
        }, 1000); // 1 second delay

        return () => clearTimeout(delay);
    }, [multiply]);

    return (
        <>
            <button onClick={() => setAdd(add + 1)}>Addition</button>
            <span>{add}</span>
            <br />
            <button onClick={() => setSub(sub - 1)}>Subtraction</button>
            <span>{sub}</span>
            <br />
            <span>{multiply}</span>
            <br />
            <span><p>Delayed Multiply : </p>{delayedMultiply}</span>
        </>
    );
}

export default Usememo;