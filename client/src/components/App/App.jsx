import React from 'react';
import styled, { css } from 'styled-components';
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import RelatedItems from 'RelatedItems/RelatedItem.jsx'

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Overview productId={11}/>
      <Reviews />
      <RelatedItems />
    </Container>
  );
}

export default App;
