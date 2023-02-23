import React from 'react';
import { useContext, useReducer } from 'react';
import reducer from '../reducers/reducerUser';
import axios from 'axios';

const ContextUser = React.createContext();

const initialState = {
  alertType: '',
  alertText: '',
  showAlert: false,
  user: null,
};

export const ProviderUser = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const notAllValuesAlert = () => {
    dispatch({ type: 'NOT_ALL_VALUES_ALERT' });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: 'CLEAR_ALERT' });
    }, 2000);
  };

  const setupUser = async ({ currentUser, endUrl, alertText }) => {
    const { data } = await axios.post(`/api/v1/users/${endUrl}`, currentUser);
    const { user } = data;
    try {
      dispatch({
        type: 'USER_SUCCESS',
        payload: { user, alertText },
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: 'USER_ERROR',
        payload: { msg: error.response.status },
      });
    }
    clearAlert();
  };
  const logoutUser = async () => {
    await axios.get('/api/v1/users/logout');
    dispatch({ type: 'LOGOUT_USER' });
  };
  return (
    <ContextUser.Provider
      value={{ ...state, notAllValuesAlert, setupUser, logoutUser }}
    >
      {children}
    </ContextUser.Provider>
  );
};

export const useContextUser = () => {
  return useContext(ContextUser);
};
