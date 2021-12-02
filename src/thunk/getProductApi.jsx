import axios from "axios";
import { getProduct } from "../actions";


const client = axios.create({
  baseURL: ' http://localhost:8000',
});
 const tokenpro=JSON.parse(localStorage.getItem('token'))
tokenpro.map((data =>
client.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
))
export const productRequest = (id) => async (dispatch) => {
  try {
    const response = await client.get(`/products`);
    dispatch(getProduct(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}