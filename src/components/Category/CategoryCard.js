// React Component to display Category Cards in the Category Component
import React from 'react';
import { CardWrapper } from '../../styled';
import { StyledLink } from './CategoryCard.styled';

const CategoryCard = ({ id, name, description }) => {
  return (
    <CardWrapper>
      <StyledLink to={`/products/${id}`}>
        <h3>{name}</h3>
        <h5>{description}</h5>
      </StyledLink>
    </CardWrapper>
  );
};

export default CategoryCard;
