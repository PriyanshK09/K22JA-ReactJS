import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div>
            <h1>Oct 15 Class Code</h1>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default CounterComponent;