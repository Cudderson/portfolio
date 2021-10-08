import React from 'react';
import ReactDOM from 'react-dom';

const element = <span>Hello, World!!!</span>

const text = (
  <h3>
    I will be using this branch to test new features!
  </h3>
)

const container = (
  <div>
    {element}
    <div>
      {text}
    </div>
  </div>
)

ReactDOM.render(
  container,
  document.getElementById('root')
);