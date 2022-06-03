import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGallery from 'Overview/ImageGallery.jsx';
import ProductInformation from 'Overview/ProductInformation.jsx';
import StyleSelector from 'Overview/StyleSelector.jsx';
import AddToCart from 'Overview/AddToCart.jsx';

function Overview({
  product,
  styles,
  rating,
  totalReviews,
}) {
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [selectedStyleId, setSelectedStyleId] = useState();

  useEffect(() => {
    if (product && styles && rating !== null && totalReviews !== null) {
      setDataIsLoading(false)
    }

    if (styles?.length > 0) {
      setSelectedStyleId(
        styles.find((style) => style['default?']).style_id
      );
    }
  }, [product, styles, rating, totalReviews]);

  if (dataIsLoading) {
    return (
      <Loading>
        <img src="\assets\spinner.gif" />
      </Loading>
    );
  }

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
          rating={rating}
          totalReviews={totalReviews}
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
  product: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  rating: PropTypes.number,
  totalReviews: PropTypes.number,
};

// TODO: fix width
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

const StyledOverview = styled.div`
  margin: var(--space-7) var(--space-6);
  width: fit-content;
  height: var(--size-15);
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  align-items:flex-start;
  justify-content: center;
  gap: var(--space-6);
`;

const OverviewMain = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-3);
  width: var(--size-12);
  height: 100%;
  padding-top: var(--space-7);
  padding-bottom: var(--space-7);
`;

export default Overview;
