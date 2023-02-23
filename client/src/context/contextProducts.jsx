import React from 'react';
import { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/reducerProducts';
import axios from 'axios';
const featuredUrl = '/api/v1/products/featured';

const ContextProducts = React.createContext();

const initialState = {
  sidebarOpen: false,
  featured_loading: false,
  featured_error: false,
  featured_Products: [],
  singleProduct_loading: false,
  singleProduct_error: false,
  singleProduct: {},
};
export const ProviderProducts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };
  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  const getFeaturedProducts = async (url) => {
    dispatch({ type: 'FEATURED_LOADING' });
    try {
      const featuredProducts = await axios(url);
      const { data } = featuredProducts;
      const fProducts = data.featuredProducts;
      dispatch({ type: 'FEATURED_SUCCESS', payload: fProducts });
    } catch (error) {
      dispatch({ type: 'FEATURED_ERROR' });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: 'SINGLE_LOADING' });
    try {
      const singleProduct = await axios(url);
      const { data } = singleProduct;
      const sProduct = data.singleProduct;
      dispatch({ type: 'SINGLE_SUCCESS', payload: sProduct });
    } catch (error) {
      dispatch({ type: 'SINGLE_ERROR' });
    }
  };

  useEffect(() => {
    getFeaturedProducts(featuredUrl);
  }, []);
  return (
    <ContextProducts.Provider
      value={{ ...state, openSidebar, closeSidebar, getSingleProduct }}
    >
      {children}
    </ContextProducts.Provider>
  );
};

export const useContextProducts = () => {
  return useContext(ContextProducts);
};
