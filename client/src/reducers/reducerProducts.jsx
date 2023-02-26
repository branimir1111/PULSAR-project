const reducerProducts = (state, action) => {
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, sidebarOpen: true };
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, sidebarOpen: false };
  }
  if (action.type === 'FEATURED_LOADING') {
    return { ...state, featured_loading: true };
  }
  if (action.type === 'FEATURED_SUCCESS') {
    return {
      ...state,
      featured_loading: false,
      featured_Products: action.payload,
    };
  }
  if (action.type === 'FEATURED_ERROR') {
    return { ...state, featured_loading: false, featured_error: true };
  }
  if (action.type === 'SINGLE_LOADING') {
    return {
      ...state,
      singleProduct_loading: true,
      singleProduct_error: false,
    };
  }
  if (action.type === 'SINGLE_SUCCESS') {
    return {
      ...state,
      singleProduct_loading: false,
      singleProduct: action.payload,
    };
  }
  if (action.type === 'SINGLE_ERROR') {
    return {
      ...state,
      singleProduct_loading: false,
      singleProduct_error: true,
    };
  }
  if (action.type === 'PRODUCT_SUCCESS') {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === 'PRODUCT_ERROR') {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Something went wrong',
    };
  }
  throw new Error(`There is no matcing "${action.type}"-action type`);
};
export default reducerProducts;
