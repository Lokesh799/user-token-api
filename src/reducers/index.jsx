
import { combineReducers } from 'redux';
import postUser from './registartionUser';
import LoginUser from './LoginUser'
import getProduct from './getProduct';

const reducer = combineReducers({
  postUser,
  LoginUser,
  getProduct
});
export default reducer;