// React Component for Product Card, used in the Products Component
import React from 'react';

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
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{currency}</p>
      <p>{delivery}</p>
      <p>{inStock}</p>
      <p>{thumbnail}</p>
      <p>{categoryId}</p>
    </div>
  );
};

export default ProductCard;
