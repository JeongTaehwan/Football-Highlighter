import React from 'react';
import { Route } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import Highlight from './components/Highlgiht/Highlight';
import Home from './components/Home/Home';

const GlobalStyle = createGlobalStyle`
  background-color:  #E0E0E0;
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Route path="/" exact component={Home} />
      <Route path="/highlight" exact component={Highlight} />
    </div>
  );
}

export default App;