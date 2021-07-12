// React Component displaying products in Cart; used in the Checkout Component
import React, { useRef } from 'react';
import { Button, Icon } from 'rsuite';

const ChangeProductQtyBtn = ({ productQty }) => {
  const reff = useRef();
  // use the productId and get the product quantity from the Shopping-Cart Context

  // function to increase Product quantity
  const addQty = () => {
    // console.log(reff.current.innerText);   // gets the current qty written in the <span> element
  };

  // function to reduce Product quantity
  const reduceQty = () => {
    // eslint-disable-next-line no-console
    // console.log(reff.current.innerText);  // gets the current qty written in the <span> element
  };

  return (
    <>
      <Button size="xs" onClick={addQty}>
        <Icon icon="plus" />
      </Button>
      <span ref={reff} style={{ padding: '10px' }}>
        {productQty}
      </span>
      <Button size="xs" onClick={reduceQty}>
        <Icon icon="minus" />
      </Button>
    </>
  );
};

export default ChangeProductQtyBtn;
