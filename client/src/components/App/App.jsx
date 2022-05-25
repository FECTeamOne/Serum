import React from 'react';
import styled, { css } from 'styled-components';
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import RelatedItemsList from '../RelatedItems/RelatedItemsList.jsx'

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Overview />
      <Reviews />
      <RelatedItemsList />
    </Container>
  );
}

export default App;
