import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductCard from 'shared/ProductCard.jsx';
import Button from 'shared/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { StarIconFills } from 'assets/StarIcon.jsx';
import GlobalStyle from '../../globalStyles.js';

function Home() {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({});
  const [page, setPage] = useState(1);
  const nagivate = useNavigate();
  useEffect(() => {
    axios.get(`/products?page=${page}`)
      .then((data) => setProducts([...products, ...data.data]))
      .catch((err) => console.log(err));
  }, [page]);
  useEffect(() => {
    if (!products[0] || !Array.isArray(products)) {
      return;
    }
    const promises = [];
    const data = {};
    for (let i = (page - 1) * 5; i < products.length; i++) {
      promises.push(axios.get(`/products/${products[i].id}/styles`)
        .then((res) => {
          if (!data[i]) {
            data[i] = {};
          }
          data[i].photo = res.data.results[0].photos[0].url;
        })
        .catch((err) => console.log(err)));
      promises.push(axios.get(`/reviews/meta?product_id=${products[i].id}`)
        .then((results) => {
          if (!data[i]) {
            data[i] = {};
          }
          data[i].product = products[i];
          data[i].meta = (results.data);
        })
        .catch((err) => console.log(err)));
    }
    Promise.all(promises)
      .then(() => setProductData({ ...data, ...productData }))
      .catch(() => {});
  }, [products]);
  if (!productData['0']) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <GlobalStyle />
      <StarIconFills />
      <Title>
        This is the home page
      </Title>
      <More>
        <Button onClick={() => setPage(page + 1)}>More Products</Button>
      </More>
      <div>
        {Object.values(productData).map((value) => (
          <Items>
            <Button onClick={() => { nagivate(`/item/${value.product.id}`); }}>
              <ProductCard
                product={value.product}
                rating={4}
                imageUrl={value.photo}
              />
            </Button>
          </Items>
        ))}
      </div>
    </div>
  );
}

const Title = styled.h2`
  font-size: var(--text-7);
  text-align: center;
  margin: var(--space-4)
`;
const More = styled.h4`
  font-size: var(--text-5);
  text-align: center;
  margin: var(--space-4)
`;
const Items = styled.div`
  display: inline-block;
  margin: var(--space-3);
`;

export default Home;
