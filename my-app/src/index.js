import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <StoreProvider>
      <App />
    {console.log("Developer: md.nasmus shahadat")}
    </StoreProvider>
  </React.StrictMode>
);

