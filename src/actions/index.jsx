export const USER_REGISTER= 'USER_REGISTER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_TOKEN = 'SET TOKEN';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_FAMILY = 'GET_FAMILY';
export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_TRANSICATION = 'GET_TRANSICATION';
export const SET_PRODUCT_FILTER = 'SET_PRODUCT_FILTER';
export const SET_LOCATIONS_FILTER = 'SET_LOCATIONS_FILTER';


export const userRegister = (payload) => ({ type: USER_REGISTER, payload });
export const userLogin = (payload) => ({ type: USER_LOGIN, payload });
export const setToken = (payload) => ({ type: USER_TOKEN, payload });
export const getProduct = (payload) => ({ type: GET_PRODUCT, payload });
export const getFamily = (payload) => ({ type: GET_FAMILY, payload });
export const getLocations = (payload) => ({ type: GET_LOCATIONS, payload });
export const getTransication = (payload) => ({ type: GET_TRANSICATION, payload });
export const setProductFilter = (payload) => ({ type: SET_PRODUCT_FILTER, payload });
export const setLocatonFilter = (payload) => ({ type: SET_LOCATIONS_FILTER, payload });
