import React from 'react';
import PropTypes from 'prop-types';
import RelatedItemsList from './RelatedItemsList.jsx';
import OutfitItemsList from './OutfitItemsList.jsx';

function RelatedItems({ productId }) {
  return (
    <div>
      <RelatedItemsList currentItemId={productId} />
      <OutfitItemsList />
    </div>
  );
}

RelatedItems.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default RelatedItems;
