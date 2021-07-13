// Component to show Product Info in Checkout Page
import React from 'react';

import productsData from '../../Databases/products.json'; // hard-coded JSON Products database

const ShowProductInfo = ({ id, productPrice }) => {
  // extracting Product info from database
  // compare all the Products in the database with the Product info sent to this Component
  /*  DIFFERENCE BETWEEN Array.find() and Array.filter:
      - Array.find() returns the first element in the array that satisfies the condition.
      - Array.filter() returns an array of elements satisfying the condition.
  */
  const addedProduct = productsData.find(product => product.id === id);
  // console.log(addedProduct.name);

  return (
    <>
      <td>
        <img
          src={addedProduct.thumbnail}
          alt="img"
          style={{ height: '35px', width: '60px' }}
        />
      </td>
      <td>{addedProduct.name}</td>
      <td>{`${addedProduct.currency} ${productPrice}.00`}</td>
    </>
  );
};

export default ShowProductInfo;
