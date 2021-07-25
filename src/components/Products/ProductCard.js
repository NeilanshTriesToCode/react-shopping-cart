// React Component for Product Card, used in the Products Component
import React, { useCallback } from 'react';
import { Alert } from 'rsuite';
import { CardWrapper } from '../../styled';
import { useShoppingCart } from '../../misc/shoppingCart.context';

import AddToCart from './AddToCart';

const ProductCard = ({
  productId,
  name,
  productPrice,
  currency,
  delivery,
  inStock,
  thumbnail,
  categoryId,
}) => {
  // use Shopping-Cart Context
  const { cartState, dispatch } = useShoppingCart();

  // function to add Product to Cart. Sent as a Prop to the AddToCart Component.
  const addProduct = useCallback(() => {
    dispatch({
      type: 'ADD_PRODUCT',
      productInfo: { id: productId, price: productPrice },
    });

    Alert.info('Product added to cart', 4000);
  }, [dispatch, productId, productPrice]);

  return (
    <>
      <CardWrapper className="product-card">
        <div className="img-wrapper">
          <img src={thumbnail} alt="product img" />
        </div>
        <div className="text-container">
          <h3>{name}</h3>
          <h4>{`${currency} ${productPrice}.00`}</h4>
          <p className={delivery ? 'text-blue' : 'text-black'}>
            {delivery ? 'Delivery available' : 'Delivery unavailable'}
          </p>
          <p className={inStock ? 'text-green' : 'text-red'}>
            {inStock ? 'In stock' : 'Out of stock'}
          </p>
        </div>
        <AddToCart inStock={inStock} addProduct={addProduct} />
      </CardWrapper>
    </>
  );
};

export default ProductCard;
