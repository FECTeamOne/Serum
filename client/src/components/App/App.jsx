import React from 'react';
import styled, { css } from 'styled-components';

// a very basic example of how to use the styles
// It uses `` as a function call then you put in any css
const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0.5em 1em;
padding: 0.25em 1em;

/* this is to change style based on a prop */

${(props) => props.test && css`
  background: palevioletred;
  color: white;
`};
`;

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      Hello
      <Button as="a" href="#">test</Button>
      <Button test>test</Button>
    </Container>
  );
}

export default App;
