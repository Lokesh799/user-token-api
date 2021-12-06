import axios from 'axios';
import { userRegister } from '../actions';


const client = axios.create({
  baseURL: ' http://localhost:8000',
});

export const userRequest = (userinformation) => async (dispatch) => {
  try {
    const response = await client.post('/auth/register' , userinformation);
    dispatch(userRegister(response.data));
  } catch (err) {
    console.log(err);
  }
}