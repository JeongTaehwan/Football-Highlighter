import React from 'react';
import { Route } from 'react-router';
import Api from './components/Api';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Home path="/home" />
      <Route path="/highlight" exact component={Api} />
    </div>
  );
}

export default App;
