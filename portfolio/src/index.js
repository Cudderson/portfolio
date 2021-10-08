import React from 'react';
import ReactDOM from 'react-dom';

const element = <span>Hello, World!!!</span>

const container = (
  <div>
    Message: {element}
  </div>
)

ReactDOM.render(
  container,
  document.getElementById('root')
);