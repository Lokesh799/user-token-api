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
    console.log(response)
    const getToken = localStorage.getItem('token') || '[]'
    const token = JSON.parse(getToken)
    token.push({
      token: (response.data.access_token)
    })
    if (response.status === 200) {
      localStorage.setItem("token", JSON.stringify(token))
    } else {
      return alert("entered wrong data")
    }
  } catch (err) {
    console.log(err);
  }
}