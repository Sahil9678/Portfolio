import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// store.subscribe(() => console.log(store.getState()) );

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

