// React Component for the Checkout page
import React from 'react';
import { Panel } from 'rsuite';
import CartProducts from './CartProducts';

import { StyledTable } from './Checkout.styled';

const Checkout = () => {
  // call shoppingCart Context

  return (
    <div>
      <Panel>
        <StyledTable className="checkout">
          <thead>
            <tr>
              <th> </th>
              <th>Name </th>
              <th>Price </th>
              <th>Quantity </th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            <CartProducts />
          </tbody>

          <tfoot>Total</tfoot>
        </StyledTable>
      </Panel>
    </div>
  );
};

export default Checkout;
