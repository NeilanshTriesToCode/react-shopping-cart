// React Component for list of Categories

import React from 'react';

import CategoryCard from './CategoryCard';
import categoriesData from '../../Databases/categories.json'; // get JSON database containing Categories info
import { CardGrid, StyledDivider } from '../../styled';

// console.log(categoriesData);

const Category = () => {
  return (
    <CardGrid>
      <StyledDivider />
      {categoriesData.map(category => (
        <CategoryCard
          key={category.id}
          id={category.id}
          name={category.name}
          description={category.description}
        />
      ))}
    </CardGrid>
  );
};

export default Category;
