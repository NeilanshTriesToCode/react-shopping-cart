// React Component for Homepage which shows Featured Products
import React from 'react';

import { HomepageWrapper, StyledCarousel } from './Homepage.styled';
import { StyledDivider } from '../../styled';

import productsData from '../../Databases/products.json';

const Homepage = () => {
  return (
    <HomepageWrapper>
      <StyledDivider />

      <div className="homepageTitleDiv">
        <h1 className="maintTitle">
          Just when you thought things couldnt get better
        </h1>
        <h4>...you end up here</h4>
      </div>

      <StyledCarousel autoplay>
        <img
          src={productsData[5].thumbnail}
          alt=""
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        />

        <img src={productsData[2].thumbnail} alt="" />

        <img src={productsData[3].thumbnail} alt="" />
      </StyledCarousel>
    </HomepageWrapper>
  );
};

export default Homepage;
