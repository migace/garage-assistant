import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers';
import { getAll as getAllOrders } from './actions/Orders';
import { getAll as getAllClients } from './actions/Clients';
import App from './components/presentational/App';
import thunk from 'redux-thunk';
import OrdersService from './services/Orders';
import ClientsService from './services/Clients';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../node_modules/react-datepicker/dist/react-datepicker.min.css';
import '../../../node_modules/bulma/css/bulma.min.css';

const store = createStore(
  combineReducers(
    reducers,
  ),
  applyMiddleware(thunk)
);
const clientsService = new ClientsService();
clientsService.getAll().then(clients => store.dispatch(getAllClients(clients)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
