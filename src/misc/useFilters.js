// custom-hook built around the useReducer() hook to apply filters to Products

import { useReducer } from 'react';

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
                filterName:  "BELOW_$50",
            }
        (would require nested-switches)
    */

    switch (action.filterAction) {
      case 'SET': {
        // check if filter is already applied
        const isFilterApplied = filterState.includes(action.filterName);

        // remove the filter from array of filters if it's already applied, or add it to the array of the filters
        return isFilterApplied
          ? filterState.filter(filterName => filterName !== action.filterName)
          : [...filterState, action.filterName];
      }

      case 'RESET':
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
