import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';

import Homepage from './components/Homepage/Homepage';
import Categories from './components/Category/Categories';
import Products from './components/Products/Products';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Homepage />
        <Switch>
          <Route exact path="/categories" component={Categories} />

          <Route exact path="/products/:cid" component={Products} />

          <Route eaxct path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
