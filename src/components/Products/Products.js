// React Component that lists products from all Categories (by default)
// This Component also allows users to use filters for their search

import React, { useState, useCallback } from 'react';
import { Loader, Checkbox, CheckboxGroup } from 'rsuite';
import { useParams } from 'react-router';
import { useFilters } from '../../misc/useFilters';

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

// function to get filteredProducts
// "filters" sent as an argument keeps track of filters states
function getFilteredProducts(products, filters) {
  // get all products
  let filteredProducts = [...products];

  if (filters.IN_STOCK_ONLY) {
    filteredProducts = filteredProducts.filter(product => product.inStock);
  }

  if (filters.BELOW_$50) {
    filteredProducts = filteredProducts.filter(product => product.price < 50);
  }

  if (filters.$50_$100) {
    filteredProducts = filteredProducts.filter(
      product => product.price >= 50 && product.price <= 100
    );
  }

  if (filters.ABOVE_$100) {
    filteredProducts = filteredProducts.filter(product => product.price > 100);
  }

  return filteredProducts;
}

const Products = () => {
  // getting categoryId from the page URL
  const { cid } = useParams();

  // state for loading
  const [isLoading, setIsLoading] = useState(false);

  // state for filters using custom-hook
  const [filters, filterDispatch] = useFilters({
    IN_STOCK_ONLY: false,
    BELOW_$50: false,
    $50_$100: false,
    ABOVE_$100: false,
  });

  // get filtered products
  const filteredProducts = getFilteredProducts(productsData, filters);

  // function to handle "Availability" filter
  const handleFilters = useCallback(
    value => {
      // calling dispatch for filters
      // "filters[value]" is true/false depending on current state of the filter.
      // "value" comes from the name of the Checkbox
      filterDispatch({
        filterAction: 'SET',
        filterType: value,
        applyFilter: filters[value],
      });

      // eslint-disable-next-line no-console
      // console.log(filters);
    },
    [filterDispatch, filters]
  );

  return (
    <>
      {isLoading && <Loader speed="normal" center content="loading.." />}
      <StyledDivider />

      <div>
        <h4>Filters</h4>
        <CheckboxGroup>
          <Checkbox value="IN_STOCK_ONLY" onChange={handleFilters}>
            In stock only
          </Checkbox>
          <Checkbox value="BELOW_$50" onChange={handleFilters}>
            Below $50
          </Checkbox>
          <Checkbox value="$50_$100" onChange={handleFilters}>
            $50 - $100
          </Checkbox>
          <Checkbox value="ABOVE_$100" onChange={handleFilters}>
            Above $100
          </Checkbox>
        </CheckboxGroup>
      </div>

      <div>
        {!isLoading &&
          filteredProducts.map(product => (
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
