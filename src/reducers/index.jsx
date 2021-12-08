
import { combineReducers } from 'redux';
import postUser from './registartionUser';
import loginUser from './loginUser'
import getProduct from './getProduct';
import getFamilies from './getFamily';
import getLocations from './getLocations';
import getTransication from './getTransication';

const reducer = combineReducers({
  postUser,
  loginUser,
  getProduct,
  getFamilies,
  getLocations,
  getTransication
});
export default reducer;