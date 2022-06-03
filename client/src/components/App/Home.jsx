import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductCard from 'shared/ProductCard.jsx';
import Button from 'shared/Button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { StarIconFills } from 'assets/StarIcon.jsx'
import GlobalStyle from '../../globalStyles.js';

function Home() {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({});
  const nagivate = useNavigate();
  useEffect(() => {
    axios.get('/products')
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log(products)
    if (!products[0] || !Array.isArray(products)) {
      return;
    }
    const promises = [];
    const data = {};
    products.forEach((product, i) => {
      promises.push(axios.get(`/products/${product.id}/styles`)
        .then((res) => {
          if (!data[i]) {
            data[i] = {};
          }
          data[i].photo = res.data.results[0].photos[0].url;
          data[i].product = product;
        })
        .catch((err) => console.log(err)));
      promises.push(axios.get(`/reviews/meta?product_id=${product.id}`)
        .then((results) => {
          if (!data[i]) {
            data[i] = {};
          }
          data[i].meta = (results.data);
        })
        .catch((err) => console.log(err)));
    });
    Promise.all(promises)
      .then(() => setProductData(data))
      .catch(() => {});
  }, [products]);
  if (!productData['0']) {
    return <div>laoding...</div>;
  }
  console.log(Object.values(productData));
  return (
    <div>
      <GlobalStyle />
      <StarIconFills />
      This is the home page
      <div>
        {Object.values(productData).map((value) => (
          <Button onClick={() => { nagivate(`/item/${value.product.id}`); }}>
            <ProductCard
              product={value.product}
              rating={4}
              imageUrl={value.photo}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Home;
