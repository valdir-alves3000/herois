import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Herois from './pages/Herois';

function Routes() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/Herois" exact component={Herois} />
    </BrowserRouter>
  );
}

export default Routes;