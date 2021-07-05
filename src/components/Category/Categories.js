// React Component for list of Categories

import React from 'react';
import CategoryGrid from './CategoryGrid';
import { getCategories } from '../../helpers';

// const categoriesData = data.json();
getCategories().then(categoryInfo => {
  // eslint-disable-next-line no-console
  console.log(categoryInfo.length);
});

const Category = () => {
  return (
    <div>
      <p>h</p>
    </div>
  );
};

export default Category;
