// React Component next to the Cart Button, showing number of Products in Cart.
import React from 'react';
import { Avatar } from 'rsuite';

const NumProductsAvatar = () => {
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
        3
      </Avatar>
    </>
  );
};

export default NumProductsAvatar;
