// React Component for the Checkout page
import React from 'react';
import { Alert, Button, Icon, Panel } from 'rsuite';

import { useShoppingCart } from '../../misc/shoppingCart.context';

import ChangeProductQtyBtn from './ChangeProductQtyBtn';
import { StyledDivider } from '../../styled';
import { CheckoutTitle, TableWrapper } from './Checkout.styled';
import ShowProductInfo from './ShowProductInfo';

const Checkout = () => {
  // call shoppingCart Context
  const { cartState, dispatch } = useShoppingCart();

  // function to add product quantity
  const handleAddQty = productId => {
    dispatch({
      type: 'ADD_QTY',
      productInfo: {
        id: productId,
      },
    });
  };

  // function to reduce product quantity
  const handleReduceQty = productId => {
    dispatch({
      type: 'REDUCE_QTY',
      productInfo: {
        id: productId,
      },
    });
  };

  // function to remove Product
  const removeProduct = productId => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      productInfo: {
        id: productId,
      },
    });

    Alert.info('Removed product from cart', 4000);
  };

  // function to calculate total price of Products
  const calcTotalPrice = () => {
    return cartState.reduce(
      (total, product) => total + product.price * product.qty,
      0
    );
  };

  // function to reset Cart
  const resetCart = () => {
    dispatch({ type: 'RESET_CART' });
  };

  return (
    <>
      <StyledDivider />
      <CheckoutTitle>
        <h3>Checkout</h3>
        <div style={{ float: 'right', marginLeft: 'auto' }}>
          <Button color="cyan" onClick={resetCart}>
            <Icon icon="cart-arrow-down" /> Reset
          </Button>
        </div>
      </CheckoutTitle>
      <TableWrapper>
        <table>
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
                  <ChangeProductQtyBtn
                    id={product.id}
                    productQty={product.qty}
                    addQty={handleAddQty}
                    reduceQty={handleReduceQty}
                  />
                </td>
                <td>
                  <Button onClick={() => removeProduct(product.id)}>
                    <Icon icon="close-circle" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td>
                <h5
                  style={{ fontSize: 'calc(8px + 1vw)' }}
                >{`Total: USD ${calcTotalPrice()}.00`}</h5>
              </td>
            </tr>
          </tfoot>
        </table>
      </TableWrapper>
    </>
  );
};

export default Checkout;
