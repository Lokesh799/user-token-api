import { GET_TRANSICATION } from "../actions";

const initialState = {
  getTransication: [],
}

const getTransication = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSICATION:
      return {
        ...state,
        getTransication: action.payload,
      };
    default:
      return state;
  }
}
export default getTransication;