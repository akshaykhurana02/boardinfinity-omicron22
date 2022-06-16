import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
//import UncontrolledComponent from './controlled-uncontrolled/UncontrolledComponent';
//import ControlledComponent from './controlled-uncontrolled/ControlledComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
