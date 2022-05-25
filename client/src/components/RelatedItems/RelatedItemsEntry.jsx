import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

// const Container = styled.div`
//   text-align: center;
// `;

function RelatedItemsEntry({ item }) {
  return (
    <div id="relatedItemsEntry">
      <img
        src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        width="200"
        height="300"
        alt=""
      />
      <br />
      <div>
        {item.category}
      </div>
      <div>
        {item.default_price}
      </div>
    </div>
  );
}

RelatedItemsEntry.propTypes = {
  // item: PropTypes.arrayOf(PropTypes.element).isRequired,
  item: PropTypes.object.isRequired,
  // size: PropTypes.number.isRequired,
};

export default RelatedItemsEntry;
