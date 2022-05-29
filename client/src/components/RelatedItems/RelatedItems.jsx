import React from 'react';
import RelatedItemsList from './RelatedItemsList';
import OutfitItemsList from './OutfitItemsList';

function RelatedItems() {
  return (
    <div>
      <RelatedItemsList currentItemId={40346} />
      <OutfitItemsList />
    </div>
  );
}

export default RelatedItems;
