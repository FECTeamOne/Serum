import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from 'Overview/ImageGallery.jsx';
import ProductInformation from 'Overview/ProductInformation.jsx';
import StyleSelector from 'Overview/StyleSelector.jsx';
import AddToCart from 'Overview/AddToCart.jsx';
import testData from 'tests/testData.js';


const StyledOverview = styled.div`
  margin: var(--space-6);
  width: fit-content;
  display: flex;
  align-items:flex-start;
  gap: var(--space-6);
`;

const OverviewMain = styled.main`
  width: var(--size-11);
  margin-top: var(--space-7);

  * {
    margin-bottom: var(--size-6);
  }
`;

function Overview({ productId }) {
  // const [product, setProduct] = useState({});
  // const [styles, setStyles] = useState([]);
  // const [selectedStyleId, setSelectedStyleId] = useState();
  //TODO: delete once data fetching is up
  const [product, setProduct] = useState(testData.product);
  const [styles, setStyles] = useState(testData.styles.results);
  const [selectedStyleId, setSelectedStyleId] = useState(1);

  useEffect(() => {
    // TODO: account for unmounting
    async function fetchData() {
      try {
        const [productResponse, stylesResponse] = await Promise.all([
          axios.get(`/products/${productId}`),
          axios.get(`/products/${productId}/styles`),
        ]);

        const sortedStyles = stylesResponse.data.results.sort(
          (style1, style2) => style1.styled_id - style2.styled_id
        );

        setProduct(productResponse.data);
        setStyles(sortedStyles);
        setSelectedStyleId(
          sortedStyles.find((style) => style['default?']).style_id
        );
      } catch (error) {
        // TODO: handle error
      }
    }

    fetchData();
  }, []);

  const selectedStyle = styles.find((style) => style.style_id === selectedStyleId);
  const handleStyleSelect = (styleId) => {
    setSelectedStyleId(styleId);
  };


  return (
    <StyledOverview>
      <ImageGallery photos={selectedStyle.photos} />
      <OverviewMain>
        <ProductInformation
          product={product}
          selectedStyle={selectedStyle}
        />
        <StyleSelector
          styles={styles}
          selectedStyleId={selectedStyleId}
          handleStyleSelect={handleStyleSelect}
        />
        <AddToCart skus={selectedStyle.skus} />
      </OverviewMain>
    </StyledOverview>
  );
}

Overview.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Overview;
