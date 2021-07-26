/*
 * @Descripttion: 
 * @version: 
 * @Author: wonder.d.wang
 * @Date: 2021-04-23 09:39:14
 * @LastEditors: wonder.d.wang
 * @LastEditTime: 2021-07-23 16:04:49
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Route from './constants/router'
import './assets/style/common.css'

const render = (Component: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById('root')
  );
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

render(Route)

