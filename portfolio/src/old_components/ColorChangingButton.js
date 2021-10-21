// CHALLENGE:
// Create a component that renders a button that changes colors each second
import { useState } from "react";

const ColorChangingButton = (props) => {
    const [color, changeColor] = useState('blue');
  
    const getNewColor = () => {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
  
      let new_color = `rgb(${r}, ${g}, ${b})`;
  
      return new_color;
    }
  
    const tick = () => {
        changeColor(getNewColor);
        clearInterval(interval);
    }
  
    var interval = setInterval(tick, 1000);
   
    return (
      <button style={{backgroundColor: color, fontSize: '40px', margin: '4rem 0 0 37%', border: 'none', borderRadius: '4px', padding: '1.25rem 2rem'}}>
          {props.message}
      </button>
    )
}

export default ColorChangingButton;