import React from 'react';
import axios from 'axios';
import { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/reducerFilters';

const allProductsUrl = '/api/v1/products';

const ContextFilters = React.createContext();

const initialState = {
  gridView: true,
  filteredProducts: [],
  allProductsLoading: false,
  allProducts: [],
  allProductsError: false,
  sort: 'selectSort',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    minPrice: 0,
    price: 0,
    maxPrice: 0,
    freeShipping: false,
  },
};

export const ProviderFilters = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllProducts = async (url) => {
    dispatch({ type: 'ALLPRODUCTS_LOADING' });
    try {
      const { data } = await axios(url);
      const allProducts = data.products;
      const numOfAllProducts = data.numOfProducts;
      dispatch({ type: 'ALLPRODUCTS_SUCCESS', payload: allProducts });
    } catch (error) {
      dispatch({ type: 'ALLPRODUCTS_ERROR' });
    }
  };

  useEffect(() => {
    getAllProducts(allProductsUrl);
  }, []);

  useEffect(() => {
    dispatch({ type: 'FILTERED' }); //first filter
    dispatch({ type: 'SORT_PRODUCTS' }); //than sort
  }, [state.sort, state.filters]);

  const changeFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'price') {
      //we must convert to a number
      value = Number(value);
    }
    if (name === 'company') {
      //here we must go with textContent and not value
      //because it is a button
      value = e.target.textContent;
    }
    if (name === 'category') {
      //here we must go with textContent and not value
      //because it is a button
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'freeShipping') {
      value = e.target.checked;
    }

    dispatch({ type: 'CHANGE_FILTERS', payload: { name, value } });
  };

  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  const setGridView = () => {
    dispatch({ type: 'SET_GRIDVIEW' });
  };

  const setListView = () => {
    dispatch({ type: 'SET_LISTVIEW' });
  };

  const newSort = (e) => {
    const value = e.target.value;
    dispatch({ type: 'NEW_SORT', payload: value });
  };

  return (
    <ContextFilters.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        newSort,
        changeFilters,
        resetFilters,
      }}
    >
      {children}
    </ContextFilters.Provider>
  );
};

export const useContextFilters = () => {
  return useContext(ContextFilters);
};
