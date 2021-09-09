import React from 'react';
import { Route } from 'react-router';
import Highlight from './components/Highlight';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Route path="/home" component={Home} />
      <Route path="/highlight" exact component={Highlight} />
    </div>
  );
}

export default App;
// 아니 왜 잔디가 안채워져