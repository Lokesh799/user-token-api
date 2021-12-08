import { USER_LOGIN } from "../actions";


const getTokenFromLocalStorage = () => {
  let getToken = localStorage.getItem("token") || "";
  return getToken;
};

const initialState = {
  token: getTokenFromLocalStorage(),

}

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
}

export default loginUser;