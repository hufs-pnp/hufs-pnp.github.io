import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ReactGA from "react-ga";
import ReactGA4 from 'react-ga4';

ReactGA.initialize("UA-190309559-2");
ReactGA4.initialize("G-5KE45ZFDM1");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

