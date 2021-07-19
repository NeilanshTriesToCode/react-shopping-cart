// custom-hook built around the useReducer() hook to apply filters to Products
import { useReducer } from 'react';
// import initialProducts from '../Databases/products.json';

/*
  creating a function which returns the reducer function for filter states.
*/
function createFiltersReducer(initialState) {
  // return reducer function for filters
  // reducer function for the custom-hook useFilters()
  // productsState consists of products currently shown on the Products page
  // applying filters would affect the state of products
  return function filtersReducer(filterState, action) {
    /*  structure of "action":
         eg: action = {
                filterAction: "SET",
                filterType:  "BELOW_$50",
                applyFilter: true/false
            }
        (would require nested-switches)
    */

    // create shallow copy of filterState (never modify the state directly)
    // to be used when action.filterAction === 'RESET' (see below)
    const resetFilters = { ...filterState };

    switch (action.filterAction) {
      case 'SET': {
        return { ...filterState, [action.filterType]: !action.applyFilter }; // return only products in stock
      }

      case 'RESET':
        /*
        // reset every filter to false
        Object.keys(resetFilters).forEach(key => {
          resetFilters[key] = false;
        });
        return resetFilters;
        */

        return initialState;

      default:
        return filterState;
    }
  };
}

// custom-hook built around the useReducer() hook to manage filters
export const useFilters = initialFilterState => {
  // calling createFiltersReducer which returns a filters reducer function
  const filtersReducer = createFiltersReducer(initialFilterState);

  return useReducer(filtersReducer, initialFilterState);
};
