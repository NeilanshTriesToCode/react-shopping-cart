// Context for Shopping Cart
import React, { createContext, useContext, useEffect, useReducer } from 'react';

// states of the Shopping-Cart would be handled using the useReducer() hook.
function shoppingCartReducer(prevState, action) {
  /* action is on object
        eg.: action = {
                  type: 'ADD',
                  productInfo: '{id, price}'  (price only mentioned in case of adding product (ADD_PRODUCT))
                }
  */
  switch (action.type) {
    case 'ADD_PRODUCT': {
      // return previous state along with new product info
      return [
        ...prevState,
        { id: action.productInfo.id, price: action.productInfo.price, qty: 1 },
      ];
    }
    case 'REMOVE_PRODUCT': {
      // return array with all products except the removed one.
      return prevState.filter(product => product.id !== action.productInfo.id);
    }
    case 'ADD_QTY': {
      // increment product quantity by 1
      return prevState.map(product =>
        product.id === action.productInfo.id
          ? { ...product, qty: product.qty + 1 }
          : product
      );
    }
    case 'REDUCE_QTY': {
      // decrement product quantity by 1
      return prevState.map(product =>
        product.id === action.productInfo.id
          ? { ...product, qty: product.qty - 1 }
          : product
      );
    }
    case 'RESET_CART': {
      // return empty array
      return [];
    }
    default:
      return prevState;
  }
}

// creating Context object
const shoppingCartContext = createContext();

/*
    SHOPPING-CART CONTEXT
    - This Context will provide access to the Shopping Cart to all the enclosing Components.
    - It has a Context Provider which fulfills this purpose. 
    - The Components enclosed by <Provider /> will have access to the Context values.
    - The enclosed Components can access the Context values using the useContext() hook.
*/

/* custom-hook built around the useReducer() hook.
   - Serves the same purpose as useReducer to manage state of the Shopping-Cart.
   - Additionally, saves the most recent state of the Shopping-Cart to the browser's localStorage.
*/
function usePersistedReducer() {
  // using useReducer() to access Cart state
  // the "[]" in the function argument is the initialState.
  /* the initialState would be replaced by the third argument, 
       which is a function defining the initial state. 
    */
  const [cartState, dispatch] = useReducer(shoppingCartReducer, [], initial => {
    // access the shoppingCart value (if any) stored in the browser's localStorage
    const persistedValue = localStorage.getItem('shoppingCart');

    /* return value of shoppingCart stored in the browser's localStorage 
           (i.e. if the user already has products in the shopping cart) 
            else, return the initial state.
        */
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  /* 
    whenever the state of the Shopping-Cart (i.e. cartState) changes,
    update its state in the browser's localStorage as well.
    Shopping-Cart info is stored in browser's localStorage so that they don't 
    get erased if the app is closed.
  */
  useEffect(() => {
    // store the value of Shopping-Cart in the localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(cartState));
  }, [cartState]);

  // return cartState and dispatch
  return [cartState, dispatch];
}

// exporting the Provider function, which will be wrapped around Components
// to provide them access to Context values.
export const ShoppingCartProvider = ({ children }) => {
  // call custom-hook usePersistedReducer()
  const [cartState, dispatch] = usePersistedReducer();

  return (
    <shoppingCartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </shoppingCartContext.Provider>
  );
};

// custom-hook to use the Shopping-Cart Context
export const useShoppingCart = () => useContext(shoppingCartContext);
