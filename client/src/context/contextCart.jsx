import React from 'react';
import { useEffect } from 'react';
import { useContext, useReducer } from 'react';
import reducer from '../reducers/reducerCart';

const ContextCart = React.createContext();

const getLocaleStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};
const initialState = {
  numberOfItems: 0,
  cartItems: getLocaleStorage(),
  totalAmount: 0,
  shippingFee: 384,
};

export const ProviderCart = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const orderToCart = (_id, orderedColor, orderAmount, singleProduct) => {
    dispatch({
      type: 'ORDER_TO_CART',
      payload: { _id, orderedColor, orderAmount, singleProduct },
    });
  };

  const removeProduct = (id) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id });
  };
  const toggleAmount = (id, value) => {
    // console.log(id, value);
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, value } });
  };
  const clearShopCart = () => {
    dispatch({ type: 'CLEAR_SHOP_CART' });
  };

  useEffect(() => {
    dispatch({ type: 'TOTAL_AMOUNT' });
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <ContextCart.Provider
      value={{
        ...state,
        orderToCart,
        removeProduct,
        toggleAmount,
        clearShopCart,
      }}
    >
      {children}
    </ContextCart.Provider>
  );
};

export const useContextCart = () => {
  return useContext(ContextCart);
};
