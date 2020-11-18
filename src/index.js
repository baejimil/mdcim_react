import React from 'react';
import ReactDOM from 'react-dom';
import App_Route from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App_Route />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

