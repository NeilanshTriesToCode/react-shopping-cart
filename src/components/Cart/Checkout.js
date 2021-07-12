// React Component for the Checkout page
import React from 'react';
import { Button, Icon, Panel } from 'rsuite';

import { useShoppingCart } from '../../misc/shoppingCart.context';

import ChangeProductQtyBtn from './ChangeProductQtyBtn';
import { StyledTable } from './Checkout.styled';
import ShowProductInfo from './ShowProductInfo';

const Checkout = () => {
  // call shoppingCart Context
  const { cartState, dispatch } = useShoppingCart();

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
            {cartState.map(product => (
              <tr key={product.id}>
                <ShowProductInfo id={product.id} productPrice={product.price} />
                <td>
                  <ChangeProductQtyBtn productQty={product.qty} />
                </td>
                <td>
                  <Button>
                    <Icon icon="close-circle" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>Total</tfoot>
        </StyledTable>
      </Panel>
    </div>
  );
};

export default Checkout;
