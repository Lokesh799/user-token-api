import { GET_LOCATIONS } from "../actions";

const initialState = {
  getLocation: [],
}

const getLocations = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        getLocation: action.payload,
      };
    default:
      return state;
  }
}
export default getLocations;