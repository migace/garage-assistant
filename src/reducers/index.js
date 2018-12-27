import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import orders from './Orders';
import clients from './Clients';

export default (history) => combineReducers({
  router: connectRouter(history),
  orders,
  clients,
});
