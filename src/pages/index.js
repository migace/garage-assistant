import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
import { getAll as getAllOrders } from '../actions/Orders';
import { getAll as getAllClients } from '../actions/Clients';
import App from '../components/presentational/App';
import OrdersService from '../services/Orders';
import ClientsService from '../services/Clients';
import 'react-datepicker/dist/react-datepicker.css';
import 'bulma/css/bulma.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faEquals);
library.add(faPlus);

const store = createStore(
  compose(
    applyMiddleware(
      thunk,
    )
  )
);

const clientsService = new ClientsService();
clientsService.getAll().then(clients => store.dispatch(getAllClients(clients)));

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
