// React Component for Homepage
import React from 'react';

import { HomeWrapper } from './Homepage.styled';
import Navigation from '../Navigation';
import Title from './Title';
import Cart from '../Cart/Cart';

const Homepage = () => {
  return (
    <>
      <HomeWrapper>
        <Title
          title="Shopping Cart"
          subtitle="Anything and everything you need"
        />
        <Cart />
      </HomeWrapper>
      <Navigation />
    </>
  );
};

export default Homepage;
