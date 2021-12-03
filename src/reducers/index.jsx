
import { combineReducers } from 'redux';
import postUser from './registartionUser';
import LoginUser from './LoginUser'
import getProduct from './getProduct';
import getFamilies from './getFamily';

const reducer = combineReducers({
  postUser,
  LoginUser,
  getProduct,
  getFamilies,
});
export default reducer;