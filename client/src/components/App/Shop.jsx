import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductCard from 'shared/ProductCard.jsx';
import Button from 'shared/Button.jsx';
import { useNavigate } from 'react-router-dom';

const avrageStars = (reviewsMetadata) => {
  let totalStars = 0; // TODO change with lib fn when merged
  const values = Object.values(reviewsMetadata.ratings);
  const total = values.reduce((num, totals) => Number(num) + Number(totals), 0);
  Object.entries(reviewsMetadata.ratings).forEach((item) => { totalStars += item[0] * item[1]; });
  const avgStars = totalStars / total;
  return avgStars;
};
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

    for (let i = (page - 1) * 2; i < products.length; i++) {
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
    return (
      <Loading>
        <img src="\assets\spinner.gif" />
      </Loading>
    );
  }
  return (
    <StyledShop>
      <MoreButton onClick={() => setPage(page + 1)}>
        More Products
      </MoreButton>
      <Items>
        {Object.values(productData).map((value) => (
            <Button onClick={() => { nagivate(`/item/${value.product.id}`); }}>
              <ProductCard
                product={value.product}
                rating={avrageStars(value.meta)}
                imageUrl={value.photo}
              />
            </Button>
        ))}
      </Items>
    </StyledShop>
  );
}

const StyledShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-7);
`;

const MoreButton = styled(Button)`
  font-weight: var(--text-strong);
  font-size: var(--text-3);
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  width: var(--size-15);

  img {
    width: var(--size-6);
    margin-top: var(--size-10);
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--space-4);
  margin: var(--space-6);
  max-width: calc(4 * var(--size-10) + 4 * var(--space-4));
`;

export default Home;
