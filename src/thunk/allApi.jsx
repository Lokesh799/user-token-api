import client from "./axios";
import { getFamily, getLocations, getProduct, getTransication } from "../actions";


export const familyRequest = () => async (dispatch) => {
  try {
    const response = await client.get(`/families`);
    dispatch(getFamily(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}


export const locationRequest = () => async (dispatch) => {
  try {
    const response = await client.get(`/locations`);
    dispatch(getLocations(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}


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


export const transicationRequest = () => async (dispatch) => {
  try {
    const response = await client.get(`/transactions`);
    dispatch(getTransication(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}