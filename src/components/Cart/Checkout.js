// React Component for the Checkout page
import React from 'react';
import { Panel } from 'rsuite';

import ChangeProductQtyBtn from './ChangeProductQtyBtn';
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
            <tr>
              <td>img</td>
              <td>name</td>
              <td>price</td>
              <td>
                <ChangeProductQtyBtn />
              </td>
              <td>close</td>
            </tr>
            <tr>
              <td>img</td>
              <td>name</td>
              <td>price</td>
              <td>
                <ChangeProductQtyBtn />
              </td>
              <td>close</td>
            </tr>
            <tr>
              <td>img</td>
              <td>name</td>
              <td>price</td>
              <td>
                <ChangeProductQtyBtn />
              </td>
              <td>close</td>
            </tr>
          </tbody>

          <tfoot>Total</tfoot>
        </StyledTable>
      </Panel>
    </div>
  );
};

export default Checkout;
