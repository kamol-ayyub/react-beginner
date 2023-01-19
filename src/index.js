import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserIsLoggedContext } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserIsLoggedContext.Provider value={false}>
    <App />
  </UserIsLoggedContext.Provider>
);

reportWebVitals();
