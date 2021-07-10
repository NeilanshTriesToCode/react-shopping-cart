// React Component for Homepage
import React from 'react';

import { HomeWrapper } from './Homepage.styled';
import Navigation from '../Navigation';
import Title from './Title';
import CartButton from '../Cart/CartButton';

const Homepage = () => {
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

export default Homepage;
