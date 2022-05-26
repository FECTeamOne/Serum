import React from 'react';
import GlobalStyle from '../globalStyles.js';
import Reviews from 'Reviews/Reviews.jsx';
import Overview from 'Overview/Overview.jsx';
import RelatedItemsList from 'RelatedItems/RelatedItemsList.jsx'

function App() {
  return (
    <>
      <GlobalStyle />
      <Overview productId={11}/>
      <Reviews />
      <RelatedItemsList />
    </>
  );
}

export default App;
