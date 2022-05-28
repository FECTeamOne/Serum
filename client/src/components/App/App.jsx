import React from 'react';
import styled, { css } from 'styled-components';
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import RelatedItemsList from 'RelatedItems/RelatedItemsList.jsx'
import OutfitItemsList from 'RelatedItems/OutfitItemsList.jsx'

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Overview productId={11}/>
      <Reviews />
      <RelatedItemsList currentItemId={40346}/>
      <OutfitItemsList />
    </Container>
  );
}

export default App;
