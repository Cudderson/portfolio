// keeping this file for now, but removing setupTests.js 
// setupTests.js contained one line:
//  - import '@testing-library/jest-dom';
// learn more: https://github.com/testing-library/jest-dom
//
// I also deleted App.tests.js 
// I also deleted a comment from index.js:
// - If you want to start measuring performance in your app, pass a function
//   to log results (for example: reportWebVitals(console.log))
//   or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//   reportWebVitals();


const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
