import axios from "axios";
import { getFamily } from "../actions";


const client = axios.create({
  baseURL: ' http://localhost:8000',
});
const tokenpro = JSON.parse(localStorage.getItem('token'))
console.log(tokenpro)
tokenpro.map((data =>
  client.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
))
export const familyRequest = (id) => async (dispatch) => {
  try {
    const response = await client.get(`/families`);
    dispatch(getFamily(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}