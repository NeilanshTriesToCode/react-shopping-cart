// React Component that lists products from all Categories (by default)
// This Component also allows users to use filters for their search

import React from 'react';
import { Button, Checkbox, CheckboxGroup } from 'rsuite';
import { useParams } from 'react-router';
import { useFilters } from '../../misc/useFilters';

import { StyledDivider } from '../../styled';
import {
  MainWrapper,
  FiltersWrapper,
  ProductsWrapper,
} from './Products.styled';
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

  if (filters.includes('IN_STOCK_ONLY')) {
    filteredProducts = filteredProducts.filter(product => product.inStock);
  }

  if (filters.includes('BELOW_$50')) {
    filteredProducts = filteredProducts.filter(product => product.price < 50);
  }

  if (filters.includes('$50_$100')) {
    filteredProducts = filteredProducts.filter(
      product => product.price >= 50 && product.price <= 100
    );
  }

  if (filters.includes('ABOVE_$100')) {
    filteredProducts = filteredProducts.filter(product => product.price > 100);
  }

  return filteredProducts;
}

const Products = () => {
  // getting categoryId from the page URL
  const { cid } = useParams();

  // state for filters using custom-hook
  const [filters, filterDispatch] = useFilters([]);

  const allProducts = getInitialProducts(productsData, cid);

  // get filtered products
  const filteredProducts = getFilteredProducts(allProducts, filters);

  // function to handle "Availability" filter
  const handleFilters = value => {
    // calling dispatch for filters
    // "filters[value]" is true/false depending on current state of the filter.
    // "value" comes from the name of the Checkbox
    filterDispatch({
      filterAction: 'SET',
      filterName: value,
    });

    // eslint-disable-next-line no-console
    // console.log(filters);    // DEBUG
  };

  // function to reset filters
  const handleResetFilters = () => {
    filterDispatch({ filterAction: 'RESET' });

    // eslint-disable-next-line no-console
    // console.log(filters);   // DEBUG
  };

  return (
    <>
      <StyledDivider />
      <MainWrapper>
        <FiltersWrapper>
          <h4>Filters</h4>
          <CheckboxGroup value={filters}>
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

          <Button color="cyan" size="sm" onClick={handleResetFilters}>
            Reset
          </Button>
        </FiltersWrapper>

        <ProductsWrapper>
          {filteredProducts.length < 1 && (
            <h4 style={{ fontStyle: 'italic' }}>No products found.</h4>
          )}
          {filteredProducts.map(product => (
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
        </ProductsWrapper>
      </MainWrapper>
    </>
  );
};

export default Products;
