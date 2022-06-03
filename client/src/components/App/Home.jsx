import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      This is the home page
      <Link to="item/40344">product</Link>
    </div>
  );
}

export default Home;
