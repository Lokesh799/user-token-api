import { GET_PRODUCT,SET_PRODUCT_FILTER } from "../actions";

const initialState = {
  products: {
    products: [],
    filters: { page: 1, limit: 2 },
  },
}

const getProduct = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products:{
        ...state.products,
        ...action.payload,
      }
    };
    case SET_PRODUCT_FILTER:
      return {
        ...state,
        products: {
          ...state.products,
          filters: {
            ...state.products.filters,
            ...action.payload,
          }
        },
      };
    default:
      return state;
  }
}
export default getProduct;