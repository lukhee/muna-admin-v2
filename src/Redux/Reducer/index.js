import { combineReducers } from 'redux';
import proverbs from './proverbs';
import alert from './alert';
import auth from './auth';

export default combineReducers({
  auth,
  proverbs,
  alert
});