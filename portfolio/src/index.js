import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

// from now on, use arrow function (ES6) syntax to define components. syntax:
// const Welcome = ({name}) => <h2>Hello, {name}</h2>;
// a return statement must be provided if using curly braces


// const Clock = () => {
//   const [date, updateDate] = useState(new Date().toLocaleTimeString());

//   return (
//     <div>
//       <h1>Hello world!</h1>
//       <h2>It is {updateDate(date)}.</h2>
//     </div>
//   )
// }

// const tick = () => {
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// *** below is an example of using Hooks (useState, useEffect) in stateful functional React components (ES6 arrow function) ***

// function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Example />,
//   document.getElementById("root")
// );

// CHALLENGE:
// Create a component that renders a button that changes colors on each click (works)

// const Button = () => {
//   const [color, changeColor] = useState('red');

//   const getNewColor = () => {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);

//     let new_color = `rgb(${r}, ${g}, ${b})`;

//     return new_color;
//   }
 
//   return (
//     <button style={{backgroundColor: color, fontSize: '30px'}} onClick={() => changeColor((getNewColor))}>Click Me To Change My Color!</button>
//   )
// }

// ReactDOM.render(
//   <Button />,
//   document.getElementById("root")
// )