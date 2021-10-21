import { useState } from "react";

// a simple component that displays content in input field on button click using ES6 arrow-function components and hooks

const InputDisplay = () => {
    const [input_val, updateVal] = useState("your text will appear here");

    console.log(document.getElementsByClassName("test")[0]);

    const handleClick = () => {
        // update state with contents of input
        updateVal(document.getElementsByClassName("test-input")[0].value);
    }

    return (
        <>
          <h1>{input_val}</h1>
          <input className={"test-input"}></input>
          <button onClick={handleClick}>Click To Update Display!</button>
        </>
    )
}

export default InputDisplay