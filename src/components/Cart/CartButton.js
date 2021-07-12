// React Component for Cart
import React from 'react';
import { Icon, Button } from 'rsuite';

import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../misc/shoppingCart.context';
import { CartWrapper } from './Cart.styled';

import NumProductsAvatar from './NumProductsAvatar';

const CartButton = () => {
  // use Shopping-Cart Context to get Shopping Cart state
  const { cartState } = useShoppingCart();

  // making an array consisiting of product quantities
  const productQuantities = cartState.map(product => product.qty);

  // calculating total number of products
  const numProducts = productQuantities.reduce((total, qty) => total + qty);

  return (
    <CartWrapper>
      <Link to="/checkout">
        <Button>
          <Icon icon="shopping-basket" size="lg" />
          <NumProductsAvatar numProducts={numProducts} />
        </Button>
      </Link>
    </CartWrapper>
  );
};

export default CartButton;
