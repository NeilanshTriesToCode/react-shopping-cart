import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';

import Homepage from './components/Homepage/Homepage';
import Categories from './components/Category/Categories';
import Products from './components/Products/Products';
import Checkout from './components/Cart/Checkout';
import { ShoppingCartProvider } from './misc/shoppingCart.context';

// propsn to be sent to ThemeProvider
const theme = {
  mainColors: {
    blue: '#2196f3',
    red: '#ff0000',
    green: '#32cd32',
    black: '#000000',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Homepage />
        <Switch>
          <Route exact path="/categories" component={Categories} />

          <Route exact path="/products/:cid" component={Products} />

          <Route eaxct path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
