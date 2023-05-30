import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 測量網頁效能工具
// import reportWebVitals from './reportWebVitals';

// import App from './ch03/unit1/App';
// import App2 from './ch03/unit1/App2';

// import App from './ch03/unit2/App';
// import App from './ch03/unit3/App';
// import App from './ch03/unit4/App';
// import App from './ch03/unit5/App';
// import App from './ch03/unit6/App';
// import App from './ch04/unit1';
// import App from './ch04/unit2';
// import App from './ch04/unit3';
// import App from './ch04/unit4';
// import App from './ch04/unit5';
// import App from './ch04/unit6';
// import App from './ch04/unit7';
// import App from './ch04/unit8';
// import App from './ch04/unit9';
// import App from './ch04/unit10';
// import App from './ch05/unit1';
// import App from './ch05/unit2';
// import App from './ch05/unit3';
import App from './ch05/unit4';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
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