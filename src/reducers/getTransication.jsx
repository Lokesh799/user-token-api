import { GET_TRANSICATION } from "../actions";

const initialState = {
  gettransication: [],
}

const getTransication = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSICATION:
      return {
        ...state,
        gettransication: action.payload,
      };
    default:
      return state;
  }
}

export default getTransication;