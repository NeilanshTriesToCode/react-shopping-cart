// React Component to display Category Cards in the Category Component
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ id, name, description }) => {
  return (
    <div>
      <Link to={`/products/${id}`}>
        <h3>{name}</h3>
        <h5>{description}</h5>
      </Link>
    </div>
  );
};

export default CategoryCard;
