import React from 'react';
import ReactDOM from 'react-dom';
// import { useState, useEffect } from 'react';
import ColorChangingButton from './components/ColorChangingButton';

// from now on, use arrow function (ES6) syntax to define components. syntax:
// const Welcome = ({name}) => <h2>Hello, {name}</h2>;

const Greeting = () => {
  return (
    <div style={{fontSize: '88px', fontWeight: 'bold', marginLeft: '32%', marginTop: '4rem', color: 'lightgreen'}}>
      Cody Weller
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Greeting />
      <ColorChangingButton />
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
