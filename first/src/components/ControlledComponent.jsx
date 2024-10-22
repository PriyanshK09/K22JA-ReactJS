import React, { useState } from "react";

function ControlledComponent() {
    const [inputValue, setInputValue] = useState("");
    
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted value: ${inputValue}`);
    };

    const a=()=>{
        alert("Form Succesfully Submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button type="submit" onClick={a}>Submit</button>
        </form>
    );
}

export default ControlledComponent;