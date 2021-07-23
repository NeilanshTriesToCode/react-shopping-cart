// React Component for App Header
import React from 'react';

import { HomeWrapper } from './AppHeader.styled';
import Navigation from '../Navigation';
import Title from './Title';
import CartButton from '../Cart/CartButton';

const AppHeader = () => {
  return (
    <>
      <HomeWrapper>
        <Title title="Shopping Cart" subtitle="" />
        <CartButton />
      </HomeWrapper>
      <Navigation />
    </>
  );
};

export default AppHeader;
