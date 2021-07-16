// React Component that lists products from all Categories (by default)
// This Component also allows users to use filters for their search

import React, { useState, useCallback, useEffect } from 'react';
import { Loader, SelectPicker } from 'rsuite';
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
    role: 'Master',
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
    <div>
      {isLoading && <Loader speed="normal" center content="loading.." />}
      <StyledDivider />
      <div>
        {!isLoading && (
            <div>
              <SelectPicker
                data={stockFilters}
                appearance="default"
                placeholder="Default"
                style={{ width: 224 }}
              />
            </div>
          ) &&
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
    </div>
  );
};

export default Products;
