import client from './axios';
import { userRegister } from '../actions';


export const userRequest = (userinformation) => async (dispatch) => {
  try {
    const response = await client.post('/auth/register' , userinformation);
    dispatch(userRegister(response.data));
  } catch (err) {
    console.log(err);
  }
}