import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './unit1/App';
// import App2 from './unit1/App2';
// import reportWebVitals from './reportWebVitals';
// import App from './unit2/App';
// import App from './unit3/App';
// import App from './unit4/App';
// import App from './unit5/App';
import App from './unit6/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 測量網頁效能工具
// reportWebVitals();

// unit3
// 這樣每秒就會更新一次
// setInterval(() => {

//   const root = ReactDOM.createRoot(
//       document.getElementById('root') as HTMLElement
//     );
//     root.render(
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     );

// }, 1000)