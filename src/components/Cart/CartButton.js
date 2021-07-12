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

  // calculating total number of products
  const numProducts = cartState.reduce(
    (total, product) => total + product.qty,
    0
  );

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
