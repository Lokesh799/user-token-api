import { GET_PRODUCT } from "../actions";

const initialState = {
  products: [],
}

const getProduct = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

export default getProduct;