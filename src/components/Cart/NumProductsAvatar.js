// React Component next to the Cart Button, showing number of Products in Cart.
import React from 'react';
import { Avatar } from 'rsuite';

const NumProductsAvatar = ({ numProducts }) => {
  return (
    <>
      <Avatar
        circle
        size="sm"
        style={{
          background: 'grey',
          color: '#f5f5f5',
          marginLeft: '12px',
        }}
      >
        {numProducts}
      </Avatar>
    </>
  );
};

export default NumProductsAvatar;
