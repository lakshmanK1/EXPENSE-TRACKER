import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthenticationContextProvider from './Components/Store/AuthContext';
import {Provider} from 'react-redux'
import Store from './Components/Store/Redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthenticationContextProvider>
    <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </AuthenticationContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
