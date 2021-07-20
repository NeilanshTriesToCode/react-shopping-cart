// React Component for Homepage which shows Featured Products
import React from 'react';

import { StyledCarousel } from './Homepage.styled';
import { StyledDivider } from '../../styled';

import productsData from '../../Databases/products.json';

const Homepage = () => {
  return (
    <div>
      <StyledDivider />
      <StyledCarousel autoplay>
        <img src={productsData[5].thumbnail} alt="" />

        <img src={productsData[2].thumbnail} alt="" />

        <img src={productsData[3].thumbnail} alt="" />
      </StyledCarousel>
    </div>
  );
};

export default Homepage;
