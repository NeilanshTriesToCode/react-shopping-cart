// React Component for Cart
import React from 'react';
import { Icon, Button } from 'rsuite';
import { CartWrapper } from './Cart.styled';

import NumProductsAvatar from './NumProductsAvatar';

const Cart = () => {
  return (
    <CartWrapper>
      <Button>
        <Icon icon="shopping-basket" size="lg" />
        <NumProductsAvatar />
      </Button>
    </CartWrapper>
  );
};

export default Cart;
