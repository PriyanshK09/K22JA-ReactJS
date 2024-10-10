import React, { useState, useMemo } from 'react';
import './Usememo.css';

function Usememo() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    const multiply = useMemo(() => {
        console.log("Multiplication");
        let result = add * 5;
        for (let i = 0; i < 1000000000; i++) {} // Deliberate loop to slow down execution
        return result;
    }, [add]);

    return (
        <>
            <button onClick={() => setAdd(add + 1)}>Addition</button>
            <span>{add}</span>
            <br />
            <button onClick={() => setSub(sub - 1)}>Subtraction</button>
            <span>{sub}</span>
            <br />
            <span>{multiply}</span>
        </>
    );
}

export default Usememo;
