import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'App/Home.jsx';
import Shop from 'App/Shop.jsx';
import Product from 'App/Product.jsx';
import GlobalStyle from './globalStyles.js';
import Navbar from 'App/Navbar.jsx';
import { StarIconFills } from 'assets/StarIcon.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <StarIconFills />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/item/:id" element={<Product />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);
