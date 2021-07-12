// React Component for "Add to Cart" Button
import React from 'react';
import { Icon, Button } from 'rsuite';

const AddToCart = ({ inStock, addProduct }) => {
  return (
    <div style={{ float: 'right' }}>
      <Button color="blue" disabled={!inStock} onClick={addProduct}>
        <Icon icon="shopping-cart" /> Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
