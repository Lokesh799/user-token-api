import { USER_LOGIN } from "../actions";

const initialState = {
  userdata: {
    email: "",
    password: "",
  }
}

const LoginUser = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userdata: action.payload,
      };

    default:
      return state;
  }
}

export default LoginUser;