import client from './axios';
import { setToken } from '../actions';


export const userLoginRequest = (userlogindata) => async (dispatch) => {
  try {
    const response = await client.post('/auth/login', userlogindata);
    client.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
    localStorage.setItem("token", (response.data.access_token))
    dispatch(setToken(response.data.access_token));
  } catch (err) {
    console.log(err);
  }
}