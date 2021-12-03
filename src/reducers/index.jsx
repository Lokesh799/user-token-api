
import { combineReducers } from 'redux';
import postUser from './registartionUser';
import LoginUser from './LoginUser'
import getProduct from './getProduct';
import getFamilies from './getFamily';
import getLocations from './getLocations';
import getTransication from './getTransication';

const reducer = combineReducers({
  postUser,
  LoginUser,
  getProduct,
  getFamilies,
  getLocations,
  getTransication
});
export default reducer;