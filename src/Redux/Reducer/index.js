import { combineReducers } from 'redux';
import proverbs from './proverbs';
import alert from './alert';

export default combineReducers({
  proverbs,
  alert
});