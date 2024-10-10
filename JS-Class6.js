import { React, useState } from 'react';
function Usememo() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    const multiply = useMemo(function multiply() {
        console.log("Multiplication");
        return add * 5;
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
    )
}

export default Usememo;