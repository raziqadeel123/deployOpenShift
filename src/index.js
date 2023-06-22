import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Documentation from './Pages/Documentation';
import About from './Pages/About/About';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/document' element={<Documentation />} />
      <Route path='/about' element={<About/>} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
