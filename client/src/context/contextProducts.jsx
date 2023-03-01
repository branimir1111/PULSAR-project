import React from 'react';
import { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/reducerProducts';
import axios from 'axios';
const featuredUrl = '/api/v1/products/featured';

const ContextProducts = React.createContext();

const initialState = {
  alertTypeProduct: '',
  alertTextProduct: '',
  showAlertProduct: false,
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

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: 'CLEAR_ALERT_PRODUCT' });
    }, 2000);
  };
  const setupProduct = async ({ currentProduct }) => {
    const { data } = await axios.post(`/api/v1/products`, currentProduct);
    const { product } = data;
    try {
      console.log(product);
      dispatch({
        type: 'PRODUCT_SUCCESS',
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: 'PRODUCT_ERROR',
      });
    }
    clearAlert();
  };
  const updateProduct = async ({ currentProduct, _id }) => {
    const { data } = await axios.patch(
      `/api/v1/products/${_id}`,
      currentProduct
    );
    const { product } = data;
    try {
      console.log(product);
      dispatch({
        type: 'PRODUCT_SUCCESS_UPDATED',
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: 'PRODUCT_ERROR',
      });
    }
    clearAlert();
  };

  const deleteProduct = async ({ currentProduct, _id }) => {
    const { data } = await axios.delete(
      `/api/v1/products/${_id}`,
      currentProduct
    );
    const { product } = data;
    try {
      console.log(product);
      dispatch({
        type: 'PRODUCT_SUCCESS_DELETED',
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: 'PRODUCT_ERROR',
      });
    }
    clearAlert();
  };

  useEffect(() => {
    getFeaturedProducts(featuredUrl);
  }, []);
  return (
    <ContextProducts.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        getSingleProduct,
        setupProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ContextProducts.Provider>
  );
};

export const useContextProducts = () => {
  return useContext(ContextProducts);
};
