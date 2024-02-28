import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde "react-dom/client"
import App from './App'; // Suponiendo que App es tu componente principal

const root = createRoot(document.getElementById('root'));
root.render(<App />);


