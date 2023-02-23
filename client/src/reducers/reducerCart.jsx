const reducerCart = (state, action) => {
  if (action.type === 'ORDER_TO_CART') {
    const { _id, orderedColor, orderAmount, singleProduct } = action.payload;
    const tempItem = state.cartItems.find(
      (item) => item.id === _id + orderedColor
    );
    if (tempItem) {
      const newCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === _id + orderedColor) {
          let newAmount = cartItem.amount + orderAmount;
          if (newAmount > cartItem.maxProducts) {
            newAmount = cartItem.maxProducts;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cartItems: newCartItems };
    } else {
      const newCartItem = {
        id: _id + orderedColor,
        image: singleProduct.image,
        name: singleProduct.name,
        price: singleProduct.price,
        color: orderedColor,
        amount: orderAmount,
        maxProducts: singleProduct.inventory,
      };
      return {
        ...state,
        cartItems: [...state.cartItems, newCartItem],
      };
    }
  }
  if (action.type === 'REMOVE_PRODUCT') {
    let newCart = state.cartItems.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    return { ...state, cartItems: newCart };
  }
  if (action.type === 'CLEAR_SHOP_CART') {
    return { ...state, cartItems: [] };
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    const { id, value } = action.payload;
    const newCart = state.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        if (value === 'increase') {
          let newAmount = cartItem.amount + 1;
          if (newAmount > cartItem.maxProducts) {
            newAmount = cartItem.maxProducts;
          }
          return { ...cartItem, amount: newAmount };
        }
        if (value === 'decrease') {
          let newAmount = cartItem.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...cartItem, amount: newAmount };
        }
      } else {
        return cartItem;
      }
    });

    return { ...state, cartItems: newCart };
  }
  if (action.type === 'TOTAL_AMOUNT') {
    const { numberOfItems, totalAmount } = state.cartItems.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.numberOfItems += amount;
        total.totalAmount += price * amount;
        return total;
      },
      {
        numberOfItems: 0,
        totalAmount: 0,
      }
    );
    return { ...state, numberOfItems, totalAmount };
  }
  throw new Error(`There is no matcing "${action.type}"-action type`);
};
export default reducerCart;
