// React Component that lists products from all Categories (by default)
// This Component also allows users to use filters for their search

import React, { useState, useCallback, useEffect } from 'react';
import { Loader, CheckboxGroup, Checkbox, SelectPicker } from 'rsuite';
import { useParams } from 'react-router';
import { StyledDivider } from '../../styled';
import ProductCard from './ProductCard';

import productsData from '../../Databases/products.json'; // hard-coded JSON Products database

/* 
     If the user navigates to the Products page through the Categories page (by clicking on a Category), 
     show Products only from the Category that was clicked on.
     Show all Products if the user directly navigates to the Products page.
   */
function getInitialProducts(data, cid) {
  let newProducts = data;
  if (cid !== 'allProducts') {
    newProducts = data.filter(product => product.categoryId === cid);
  }
  return newProducts;
}

const stockFilters = [
  {
    label: 'In stock only',
    value: 'In stock only',
  },
];

const pricingFilters = [
  {
    label: 'below $50',
    value: 'below $50',
  },
  {
    label: '$50 - $100',
    value: '$50 - $100',
  },
  {
    label: 'above $100',
    value: 'above $100',
  },
];

const Products = () => {
  // getting categoryId from the page URL
  const { cid } = useParams();

  // state for loading
  const [isLoading, setIsLoading] = useState(false);

  // initial state for products
  const [products, setProducts] = useState(
    getInitialProducts(productsData, cid)
  );

  return (
    <>
      {isLoading && <Loader speed="normal" center content="loading.." />}
      <StyledDivider />

      <div>
        <h4>Filters</h4>
        <p>Availability:</p>
        <SelectPicker
          data={stockFilters}
          searchable={false}
          size="md"
          style={{ width: '180px' }}
        />
        <p>Pricing:</p>
        <SelectPicker
          data={pricingFilters}
          searchable={false}
          style={{ width: '180px' }}
        />
      </div>
      <div>
        {!isLoading &&
          products.map(product => (
            <ProductCard
              key={product.id}
              productId={product.id}
              name={product.name}
              productPrice={product.price}
              currency={product.currency}
              delivery={product.delivery}
              inStock={product.inStock}
              thumbnail={product.thumbnail}
              categoryId={product.categoryId}
            />
          ))}
      </div>
    </>
  );
};

export default Products;
