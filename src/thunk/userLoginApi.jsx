import axios from 'axios';
import { setToken } from '../actions';

const client = axios.create({
  baseURL: ' http://localhost:8000',
});
export const userLoginRequest = (userlogindata, history) => async (dispatch) => {
  try {
    console.log(userlogindata)
    const response = await client.post('/auth/login', userlogindata);
    history.push("/dashbord")
    dispatch(setToken(response.data));
     localStorage.getItem('token')
    if (response.status === 200) {
      localStorage.setItem("token", (response.data.access_token))
    } else {
      return alert("entered wrong data")
    }
  } catch (err) {
    console.log(err);
  }
}