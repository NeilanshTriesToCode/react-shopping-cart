// React Component displaying products in Cart; used in the Checkout Component
import React, { useRef } from 'react';
import { Button, Icon } from 'rsuite';

const ChangeProductQtyBtn = ({ id, productQty, addQty, reduceQty }) => {
  const reff = useRef();
  // use the productId and get the product quantity from the Shopping-Cart Context

  return (
    <>
      <Button size="xs" onClick={() => addQty(id)}>
        <Icon icon="plus" />
      </Button>
      <span ref={reff} style={{ padding: '10px' }}>
        {productQty}
      </span>
      <Button size="xs" onClick={() => reduceQty(id)}>
        <Icon icon="minus" />
      </Button>
    </>
  );
};

export default ChangeProductQtyBtn;
