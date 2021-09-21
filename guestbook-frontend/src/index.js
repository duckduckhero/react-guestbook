import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile';
import Messageboard from './components/Messageboard';
import TailwindTest from './components/TailwindTest';
import Nav from './components/Nav';

ReactDOM.render(
  <div>
    <Nav />
    <Profile />
    <Messageboard />
    <TailwindTest />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
