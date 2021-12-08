import { USER_REGISTER } from "../actions";

const initialState = {
  userData:{
    email:"",
    password:"",
  }
}

const postUser = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
export default postUser;