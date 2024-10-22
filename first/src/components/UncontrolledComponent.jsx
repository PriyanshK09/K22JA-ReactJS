import React, { useRef } from "react";

function UncontrolledComponent() {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted value: ${inputRef.current.value}`);
    };

    const a = () => {
        alert("Form Succesfully Submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={inputRef} />
            </label>
            <button type="submit" onClick={a}>Submit</button>
        </form>
    );
}

export default UncontrolledComponent;