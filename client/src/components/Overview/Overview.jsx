import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ImageGallery from 'Overview/ImageGallery.jsx';
import ProductInformation from 'Overview/ProductInformation.jsx';
import testData from '../../testData.js';

function Overview({ productId }) {
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState();

  useEffect(async () => {
    // TODO: account for unmounting
    try {
      const [productResponse, stylesResponse] = await Promise.all([
        axios.get(`/products/${productId}`),
        axios.get(`/products/${productId}/styles`),
      ]);

      const sortedStyles = stylesResponse.data.results.sort((style1, style2) => (
        style1.styled_id - style2.styled_id
      ));

      setProduct(productResponse.data);
      setStyles(sortedStyles);
      setSelectedStyle(sortedStyles.find(style => style['default?']).style_id);
    } catch (error) {
      // TODO: handle error
    }
  }, []);

  const handleStyleSelect = (styleId) => {
    setSelectedStyle(styleId);
  };

  return (
    <div>
      <ImageGallery
        // selectedStyle={selectedStyle}
        selectedStyle={1}
      />
      <ProductInformation
        // product={product}
        // styles={styles}
        // selectedStyleId={selectedStyleId}
        product={testData.product}
        styles={testData.styles.results}
        selectedStyleId={1}
        handleStyleSelect={handleStyleSelect}
      />
    </div>
  );
}

Overview.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Overview;
