import { GET_LOCATIONS } from "../actions";

const initialState = {
  getlocation: [],
}

const getLocations = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        getlocation: action.payload,
      };
    default:
      return state;
  }
}

export default getLocations;