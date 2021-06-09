import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//what this says is put <App /> at 'root' in the index.html file
ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

