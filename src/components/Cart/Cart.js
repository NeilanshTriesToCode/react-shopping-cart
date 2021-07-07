// React Component for Cart
import React from 'react';
import { Icon, Button } from 'rsuite';

import NumProductsBadge from './NumProductsBadge';

const Cart = () => {
  return (
    <div style={{ float: 'right' }}>
      <Button>
        <Icon icon="shopping-basket" />
      </Button>
      <NumProductsBadge />
    </div>
  );
};

export default Cart;
