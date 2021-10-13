import React from 'react';
import ReactDOM from 'react-dom';
// import { useState, useEffect } from 'react';
// import ColorChangingButton from './components/ColorChangingButton';
import App from './components/App';

// from now on, use arrow function (ES6) syntax to define components. syntax:
// const Welcome = ({name}) => <h2>Hello, {name}</h2>;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
