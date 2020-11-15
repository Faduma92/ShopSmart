import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/UserAuthentication/App/index';
import reportWebVitals from './reportWebVitals';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import Firebase, { FirebaseContext } from './components/UserAuthentication/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
