export const USER_REGISTER= 'USER_REGISTER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_TOKEN = 'SET TOKEN';
export const GET_PRODUCT = 'GET_PRODUCT';


export const userRegister = (payload) => ({ type: USER_REGISTER, payload });
export const userLogin = (payload) => ({ type: USER_LOGIN, payload });
export const setToken = (payload) => ({ type: USER_TOKEN, payload });
export const getProduct = (payload) => ({ type: GET_PRODUCT, payload });
