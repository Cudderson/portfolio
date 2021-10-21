import { useState } from "react";

export const MyForm = () => {
    const [first_text, updateFirst] = useState('');
    const [second_text, updateSecond] = useState('');
    const [third_text, updateThird] = useState('');

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.name === 'first_text') {
            updateFirst(e.target.value);
        }
        else if (e.target.name === 'second_text') {
            updateSecond(e.target.value);
        }
        else {
            updateThird(e.target.value);
        }
    }

    return (
        <div>
            <input name='first_text' onChange={handleChange} />
            <input name='second_text' onChange={handleChange} />
            <input name='third_text' onChange={handleChange} />
            <button onClick={() => {console.log(first_text, second_text, third_text)}}></button>
        </div>

    )
}