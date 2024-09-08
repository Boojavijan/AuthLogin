// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId="311558561244-8n2tvinq29re88qa095kneqrgcg5d40k.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
