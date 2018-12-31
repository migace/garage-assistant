import { combineReducers } from 'redux';
import orders from './Orders';
import clients from './Clients';

export default combineReducers({
  orders,
  clients,
});
