import React, { useState } from 'react';
// import styled from 'styled-components';
import RelatedItemsEntry from './RelatedItemsEntry';
import { products, productRelated } from '../../testData';

function RelatedItemsList() {
  const [start, setStart] = useState(0);
  const size = 4;
  const relatedProducts = products.filter((product) => productRelated.indexOf(product.id) > 0);

  const decrement = (event) => {
    event.preventDefault();
    setStart((oldStart) => Math.max(0, oldStart - size));
  };

  const increment = (event) => {
    event.preventDefault();
    setStart((oldStart) => Math.min(relatedProducts.length - size + 1, oldStart + size));
  };

  const relatedItems = relatedProducts.slice(start, start + size);

  return (
    <div>
      <button type="button" onClick={decrement}>
        &lt;
      </button>
      <div>
        {relatedItems.map((product) => (
          <RelatedItemsEntry key={product.id} product={product} />
        ))}
      </div>
      <button type="button" onClick={increment}>
        &gt;
      </button>
    </div>
  );
}

export default RelatedItemsList;
