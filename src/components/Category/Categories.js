// React Component for list of Categories

import React from 'react';
import CategoryCard from './CategoryCard';
import categoriesData from '../../Databases/categories.json'; // get JSON database containing Categories info

// console.log(categoriesData);

const Category = () => {
  return (
    <div>
      {categoriesData.map(category => (
        <CategoryCard
          key={category.id}
          id={category.id}
          name={category.name}
          description={category.description}
        />
      ))}
    </div>
  );
};

export default Category;
