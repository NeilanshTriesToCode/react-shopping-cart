// React Component for Homepage
import React from 'react';

import Navigation from '../Navigation';
import Title from './Title';

const Homepage = () => {
  return (
    <div>
      <Title
        title="Shopping Cart"
        subtitle="Everything and anything you need"
      />
      <Navigation />
    </div>
  );
};

export default Homepage;
