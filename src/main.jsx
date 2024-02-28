
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Cambia el nombre de BrowserRouter a Router
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  
    <Router>
    <App />
  </Router>
  

);
