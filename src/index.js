import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. redux toolkit use  configureStore then provider
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

//2. locally import rootReducer from slice folder
import rootReducer from './slices';
import './index.css';
import App from './App';

const store=configureStore({reducer:rootReducer})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
