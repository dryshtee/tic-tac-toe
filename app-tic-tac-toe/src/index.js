/**
 * Lines 1-5 brings all necessary pieces together
 * React; React's library to talk to web browsers (React DOM); 
 * the styles; the component created in App.js
 */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * rest of the file brings all pieces together and injects the final product 
 * into index.html in public folder.
 */
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
