// React Component for "Add to Cart" Button
import React from 'react';
import { Icon, Button } from 'rsuite';

const AddToCart = ({ inStock }) => {
  return (
    <div style={{ float: 'right' }}>
      <Button color="blue" disabled={!inStock}>
        <Icon icon="shopping-cart" /> Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
