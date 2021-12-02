import { USER_REGISTER } from "../actions";

const initialState = {
  userdata:{
    email:"",
    password:"",
  }
}

const postUser = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        userdata: action.payload,
      };
    default:
      return state;
  }
}

export default postUser;