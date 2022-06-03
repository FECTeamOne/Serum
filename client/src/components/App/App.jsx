import React from 'react';
import styled from 'styled-components';
import Navbar from 'App/Navbar.jsx';
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import { useParams } from "react-router-dom";
import RelatedItems from 'RelatedItems/RelatedItems.jsx';
import { StarIconFills } from 'assets/StarIcon.jsx'
import GlobalStyle from '../../globalStyles.js';

function App() {
  const { id } = useParams();
  return (
    <>
      <GlobalStyle />
      <StarIconFills />
      <Wrapper>
        <Navbar />
        <Overview productId={id} />
        <Reviews productId={id} />
        <RelatedItems productId={id} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

export default App;
