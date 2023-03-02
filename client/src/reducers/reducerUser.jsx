const reducerUser = (state, action) => {
  if (action.type === 'NOT_ALL_VALUES_ALERT') {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
  if (action.type === 'CLEAR_ALERT') {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }
  if (action.type === 'USER_SUCCESS') {
    return {
      ...state,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === 'USER_ERROR') {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === 'LOGOUT_USER') {
    return {
      ...state,
      alertType: '',
      alertText: '',
      showAlert: false,
      user: null,
    };
  }
  if (action.type === 'GET_CURRENT_USER') {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  throw new Error(`There is no matcing "${action.type}"-action type`);
};

export default reducerUser;
