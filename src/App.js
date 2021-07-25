import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';

import AppHeader from './components/Homepage/AppHeader';
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
    <ShoppingCartProvider>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route exact path="/categories" component={Categories} />

            <Route exact path="/products/:cid" component={Products} />

            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </ShoppingCartProvider>
  );
}

export default App;
