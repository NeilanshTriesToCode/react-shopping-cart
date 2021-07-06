// React Component that lists products from all Categories (by default)
// This Component also allows users to use filters for their search

import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import ProductCard from './ProductCard';

import productsData from '../../Databases/products.json'; // hard-coded JSON Products database

const Products = () => {
  // getting categoryId from the page URL
  const { cid } = useParams();

  // initial state for products
  const [products, setProducts] = useState(null);

  /* 
     If the user navigates to the Products page through the Categories page (by clicking on a Category), 
     show Products only from the Category that was clicked on.
     Show all Products if the user directly navigates to the Products page.
   */
  const getProducts = useCallback(() => {
    if (cid !== 'allProducts') {
      const newProducts = productsData.filter(
        product => product.categoryId === cid
      );
      setProducts(newProducts);
    } else {
      setProducts(productsData);
    }
  }, [cid]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      {products.map(product => (
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          currency={product.currency}
          delivery={product.delivery}
          inStock={product.inStock}
          thumbnail={product.thumbnail}
          categoryId={product.categoryId}
        />
      ))}
    </div>
  );
};

export default Products;
