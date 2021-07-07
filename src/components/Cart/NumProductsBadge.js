// React Component next to the Cart Button, showing number of Products in Cart.
import React from 'react';
import { Avatar } from 'rsuite';

const NumProductsBadge = () => {
  return (
    <>
      <Avatar
        circle
        size="sm"
        style={{
          background: '#f5f5f5',
          color: 'black',
        }}
      >
        3
      </Avatar>
    </>
  );
};

export default NumProductsBadge;
