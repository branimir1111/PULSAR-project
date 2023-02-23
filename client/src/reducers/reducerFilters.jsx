const reducerFilters = (state, action) => {
  if (action.type === 'ALLPRODUCTS_LOADING') {
    return { ...state, allProductsLoading: true };
  }
  if (action.type === 'ALLPRODUCTS_SUCCESS') {
    let productsPrices = action.payload.map((product) => product.price);
    const minPrice = Math.min(...productsPrices);
    const maxPrice = Math.max(...productsPrices);

    return {
      ...state,
      allProductsLoading: false,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        minPrice: minPrice,
        price: maxPrice,
        maxPrice: maxPrice,
      },
    };
  }
  if (action.type === 'ALLPRODUCTS_ERROR') {
    return { ...state, allProductsLoading: false, allProductsError: true };
  }
  if (action.type === 'SET_GRIDVIEW') {
    return { ...state, gridView: true };
  }
  if (action.type === 'SET_LISTVIEW') {
    return { ...state, gridView: false };
  }
  if (action.type === 'NEW_SORT') {
    return { ...state, sort: action.payload };
  }
  if (action.type === 'SORT_PRODUCTS') {
    const { sort, filteredProducts } = state;
    let tempProducts = [...filteredProducts];
    if (sort === 'priceLowest') {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === 'priceHighest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === 'nameA') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'nameZ') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === 'CHANGE_FILTERS') {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === 'FILTERED') {
    const { allProducts } = state;
    const { text, category, company, color, price, freeShipping } =
      state.filters;

    let changeProducts = [...allProducts];

    if (text) {
      changeProducts = changeProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (price) {
      changeProducts = changeProducts.filter((product) => {
        return product.price <= price;
      });
    }

    if (company !== 'all') {
      changeProducts = changeProducts.filter((product) => {
        return product.company === company;
      });
    }
    if (category !== 'all') {
      changeProducts = changeProducts.filter((product) => {
        return product.category === category;
      });
    }
    if (color !== 'all') {
      changeProducts = changeProducts.filter((product) => {
        return product.colors.find((col) => col === color);
      });
    }
    if (freeShipping) {
      changeProducts = changeProducts.filter((product) => {
        return product.freeShipping === true;
      });
    }
    return { ...state, filteredProducts: changeProducts };
  }
  if (action.type === 'RESET_FILTERS') {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.maxPrice,
        freeShipping: false,
      },
    };
  }

  throw new Error(`There is no matcing "${action.type}"-action type`);
};

export default reducerFilters;
