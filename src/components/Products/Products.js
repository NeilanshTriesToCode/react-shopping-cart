// React Component that lists products from all Categories (by default)
// This Component also allows users to use filters for their search

import React from 'react';
import { useParams } from 'react-router';
import ProductCard from './ProductCard';

import categoriesData from '../../Databases/categories.json'; // hard-coded JSON Categories database
import productsData from '../../Databases/products.json'; // hard-coded JSON Products database

const Products = () => {
  // getting categoryId from the page URL
  const { cid } = useParams();
  return (
    <div>
      {cid}
      <ProductCard />
    </div>
  );
};

export default Products;
