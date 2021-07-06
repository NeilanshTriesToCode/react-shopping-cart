// React Component for Product Card, used in the Products Component
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CardWrapper } from '../../styled';

const ProductCard = ({
  id,
  name,
  price,
  currency,
  delivery,
  inStock,
  thumbnail,
  categoryId,
}) => {
  return (
    <>
      <CardWrapper className="product-card">
        <div className="img-wrapper">
          <img src={thumbnail} alt="product img" />
        </div>
        <div className="text-container">
          <h3>{name}</h3>
          <h4>{currency + price}</h4>
          <p className={delivery ? 'text-blue' : ''}>
            {delivery ? 'Delivery available' : 'Delivery unavailable'}
          </p>
          <p className={inStock ? 'text-green' : 'text-red'}>
            {inStock ? 'In stock' : 'Out of stock'}
          </p>
        </div>
      </CardWrapper>
    </>
  );
};

export default ProductCard;
