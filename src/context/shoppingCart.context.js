// Context for Shopping Cart
import React, { createContext, useContext, useEffect, useReducer } from 'react';

// states of the Shopping-Cart would be handled using the useReducer() hook.
function shoppingCartReducer(state, action) {
  /* action is on object
        eg.: action = {type: 'ADD'}
    */
  switch (action.type) {
    case 'ADD_PRODUCT': {
      return 1;
    }
    case 'REMOVE_PRODUCT': {
      return 2;
    }
    case 'INCREASE_QTY': {
      return 3;
    }
    case 'DECREASE_QTY': {
      return 4;
    }
    default:
      return state;
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
    localStorage.setItem(JSON.stringify(cartState));
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
