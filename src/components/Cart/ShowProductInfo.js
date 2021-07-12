// Component to show Product Info in Checkout Page
import React from 'react';

import productsData from '../../Databases/products.json'; // hard-coded JSON Products database

const ShowProductInfo = ({ id, productPrice }) => {
  // extracting Product info from database
  // compare all the Products in the database with the Product info sent to this Component
  const addedProduct = productsData.filter(product => product.id === id);
  // console.log(addedProduct.name);

  return (
    <>
      <td>{addedProduct.thumbnail}</td>
      <td>{addedProduct.name}</td>
      <td>{`${addedProduct.currency} ${productPrice}.00`}</td>
    </>
  );
};

export default ShowProductInfo;
