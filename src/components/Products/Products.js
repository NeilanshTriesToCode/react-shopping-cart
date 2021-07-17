// React Component that lists products from all Categories (by default)
// This Component also allows users to use filters for their search

import React, { useState, useCallback, useEffect } from 'react';
import { Loader, SelectPicker, Radio, RadioGroup } from 'rsuite';
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

const stockFilters = [
  {
    label: 'In stock only',
    value: 'In stock only',
  },
];

const pricingFilters = [
  {
    label: 'below $50',
    value: 'BELOW $50',
  },
  {
    label: '$50 - $100',
    value: '$50 - $100',
  },
  {
    label: 'above $100',
    value: 'ABOVE $100',
  },
];

const Products = () => {
  // getting categoryId from the page URL
  const { cid } = useParams();

  // state for loading
  const [isLoading, setIsLoading] = useState(false);

  // use custom-hook for filters
  const [currentProducts, filterDispatch] = useFilters(
    getInitialProducts(productsData, cid)
  );

  // function to handle "Availability" filter
  const handleAvailabilityFilter = value => {
    // calling dispatch for filters
    filterDispatch({
      filterType: 'AVAILABILITY',
      filterAction: value,
    });

    // eslint-disable-next-line no-console
    console.log(currentProducts);
  };

  // function to handle "Availability" filter
  const handlePricingFilter = value => {
    // calling dispatch for filters
    filterDispatch({ filterType: 'PRICING', filterAction: value });

    // eslint-disable-next-line no-console
    console.log(currentProducts);
  };

  return (
    <>
      {isLoading && <Loader speed="normal" center content="loading.." />}
      <StyledDivider />

      <div>
        <h4>Filters</h4>
        <RadioGroup name="AVAILABILITY" onChange={handleAvailabilityFilter}>
          <p>Availability:</p>
          <Radio value="IN STOCK ONLY">In stock only</Radio>
        </RadioGroup>

        <RadioGroup
          name="PRICING"
          onChange={value => {
            handlePricingFilter(value);
          }}
        >
          <p>Pricing:</p>
          <Radio value="BELOW_$50">Below $50</Radio>
          <Radio value="$50-$100">$50 - $100</Radio>
          <Radio value="ABOVE_$100">Above $100</Radio>
        </RadioGroup>
      </div>

      <div>
        {!isLoading &&
          currentProducts.map(product => (
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
