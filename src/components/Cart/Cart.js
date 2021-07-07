// React Component for Cart
import React from 'react';
import { Icon, Button } from 'rsuite';
import { CartWrapper } from './Cart.styled';

import NumProductsBadge from './NumProductsBadge';

const Cart = () => {
  return (
    <CartWrapper>
      <Button>
        <Icon icon="shopping-basket" />
      </Button>
      <NumProductsBadge />
    </CartWrapper>
  );
};

export default Cart;
