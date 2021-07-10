// React Component for Cart
import React from 'react';
import { Icon, Button } from 'rsuite';
import { Link } from 'react-router-dom';
import { CartWrapper } from './Cart.styled';

import NumProductsAvatar from './NumProductsAvatar';

const CartButton = () => {
  return (
    <CartWrapper>
      <Link to="/checkout">
        <Button>
          <Icon icon="shopping-basket" size="lg" />
          <NumProductsAvatar />
        </Button>
      </Link>
    </CartWrapper>
  );
};

export default CartButton;
