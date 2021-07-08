// React Component for "Add to Cart" Button
import React from 'react';
import { Icon, Button } from 'rsuite';

const AddToCart = () => {
  return (
    <div style={{ float: 'right' }}>
      <Button color="blue">
        <Icon icon="shopping-cart" /> Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
