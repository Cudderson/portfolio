import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

// from now on, use arrow function (ES6) syntax to define components. syntax:
// const Welcome = ({name}) => <h2>Hello, {name}</h2>;

// CHALLENGE:
// Create a component that renders a button that changes colors each second

const Button = () => {
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
    <button style={{backgroundColor: color, fontSize: '25px', margin: '4rem 0 0 35%', border: 'none', borderRadius: '4px', padding: '1rem 1.5rem'}}>
        I'm a color-changing button!
    </button>
  )
}


ReactDOM.render(
    <Button />,
    document.getElementById('root')
);
