// custom-hook built around the useReducer() hook to apply filters to Products
import { useReducer } from 'react';
// import initialProducts from '../Databases/products.json';

// reducer function for the custom-hook useFilters()
// productsState consists of products currently shown on the Products page
// applying filters would affect the state of products
function filtersReducer(productsState, action) {
  /*  structure of "action":
         eg: action = {
                filterType: "PRICING",
                filterAction:  "BELOW $50"
            }
        (would require nested-switches)
    */

  switch (action.filterType) {
    case 'AVAILABILITY': {
      return productsState.filter(product => product.inStock); // return only products in stock
    }

    case 'PRICING': {
      switch (action.filterAction) {
        case 'BELOW_$50':
          return productsState.filter(product => product.price < 50);
        case '$50-$100':
          return productsState.filter(
            product => product.price >= 50 && product.price <= 100
          );
        case 'ABOVE_$100':
          return productsState.filter(product => product.price > 100);
        default:
          return productsState;
      }
    }

    case 'RESET':
      return [...productsState];

    default:
      return productsState;
  }
}

// custom-hook built around the useReducer() hook to manage filters
export const useFilters = initialProducts => {
  return useReducer(filtersReducer, initialProducts);
};
