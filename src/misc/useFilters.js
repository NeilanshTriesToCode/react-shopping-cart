// custom-hook built around the useReducer() hook to apply filters to Products
import { useReducer } from 'react';
// import initialProducts from '../Databases/products.json';

// reducer function for the custom-hook useFilters()
// productsState consists of products currently shown on the Products page
// applying filters would affect the state of products
function filtersReducer(filterState, action) {
  /*  structure of "action":
         eg: action = {
                filterAction: "SET",
                filterType:  "BELOW_$50",
                applyFilter: true/false
            }
        (would require nested-switches)
    */

  switch (action.filterAction) {
    case 'SET': {
      return { ...filterState, [action.filterType]: !action.applyFilter }; // return only products in stock
    }

    case 'RESET':
      // reset every filter to false
      Object.keys(filterState).forEach(key => {
        filterState[key] = false;
      });

      return { ...filterState };

    default:
      return filterState;
  }
}

// custom-hook built around the useReducer() hook to manage filters
export const useFilters = initialFilterState => {
  return useReducer(filtersReducer, initialFilterState);
};
