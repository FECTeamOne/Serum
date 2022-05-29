import React from 'react';
import PropTypes from 'prop-types';
import RelatedItemsList from './RelatedItemsList';
import OutfitItemsList from './OutfitItemsList';

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
