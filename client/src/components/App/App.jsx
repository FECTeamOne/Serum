import React from 'react';
import styled from 'styled-components';
import Navbar from 'App/Navbar.jsx';
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import RelatedItemsList from 'RelatedItems/RelatedItemsList.jsx';
import GlobalStyle from '../../globalStyles.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <Overview productId={40344} />
        <Reviews productId={40344} />
        <RelatedItemsList />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin:auto;
  width: fit-content;
`;

export default App;
