import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from 'App/App.jsx';
import Home from 'App/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<App />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);
