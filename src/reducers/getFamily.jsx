import { GET_FAMILY } from "../actions";

const initialState = {
  families: [],
}

const getFamilies = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAMILY:
      return {
        ...state,
        families: action.payload,
      };
    default:
      return state;
  }
}

export default getFamilies;