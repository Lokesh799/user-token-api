import axios from "axios";
import { getFamily, getLocations, getProduct, getTransication } from "../actions";


const client = axios.create({
  baseURL: ' http://localhost:8000',
});
const tokenfam = localStorage.getItem('token')
client.defaults.headers.common['Authorization'] = `Bearer ${tokenfam}`

export const familyRequest = (id) => async (dispatch) => {
  try {
    const response = await client.get(`/families`);
    dispatch(getFamily(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}


const tokenloc = localStorage.getItem('token')

client.defaults.headers.common['Authorization'] = `Bearer ${tokenloc}`
export const locationRequest = (id) => async (dispatch) => {
  try {
    const response = await client.get(`/locations`);
    dispatch(getLocations(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}



const tokenpro = localStorage.getItem('token')
client.defaults.headers.common['Authorization'] = `Bearer ${tokenpro}`

export const productRequest = (prevFilters) => async (dispatch) => {
  try {
    const params = {
      _limit: prevFilters.limit,
      _page: prevFilters.page,
    };
    const response = await client.get(`/products`, { params });
    dispatch(getProduct({ products: response.data }));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}



const tokentran = localStorage.getItem('token')
client.defaults.headers.common['Authorization'] = `Bearer ${tokentran}`

export const transicationRequest = (id) => async (dispatch) => {
  try {
    const response = await client.get(`/transactions`);
    dispatch(getTransication(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}