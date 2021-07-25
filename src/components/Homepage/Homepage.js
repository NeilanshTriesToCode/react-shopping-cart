// React Component for Homepage which shows Featured Products
import React from 'react';

import { HomepageWrapper, StyledCarousel } from './Homepage.styled';
import { StyledDivider } from '../../styled';

import productsData from '../../Databases/products.json';

// function to get an array of random Products to display in the Carousel
function getRandomProducts(productsArray) {
  const randomProducts = [-1, -1, -1, -1, -1];

  for (let i = 0; i < 5; i++) {
    // generate random index
    let x = Math.floor(Math.random() * productsArray.length);

    // generate another random index if object at this index is
    // already there in randomProducts array
    while (randomProducts.includes(productsArray[x])) {
      x = Math.floor(Math.random() * productsArray.length);
    }

    randomProducts[i] = productsArray[x];
  }

  return randomProducts;
}

const Homepage = () => {
  // getting random products from the productsData array (to display in the Carousel)
  const randomProducts = getRandomProducts(productsData); // user-defined function

  return (
    <HomepageWrapper>
      <StyledDivider />

      <div className="homepageTitleDiv">
        <h1 className="maintTitle">
          Just when you thought things couldn&apos;t get better
        </h1>
        <h4>...you end up here</h4>
      </div>

      <StyledCarousel autoplay>
        {randomProducts.map(product => (
          <img key={product.id} src={product.thumbnail} alt="" />
        ))}
      </StyledCarousel>
    </HomepageWrapper>
  );
};

export default Homepage;
