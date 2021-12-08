import { USER_LOGIN,USER_TOKEN } from "../actions";

const getTokenFromLocalStorage = () => {
  let getToken = localStorage.getItem("token") || "";
  return getToken;
};

const initialState = {
  token: getTokenFromLocalStorage(),
  userData: {
    email: "",
    password: "",
  }
}

const LoginUser = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userData: action.payload,
      };
    case USER_TOKEN:
      return{
        ...state,
        token:action.payload
      }  
    default:
      return state;
  }
}
export default LoginUser;