import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/index';
import reportWebVitals from './reportWebVitals';
import Firebase from './Components/Firebase/firebase';
import FirebaseContext from './Components/Firebase/context';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
