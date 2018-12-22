import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';
import createRootReducer from './reducers';
import { getAll as getAllOrders } from './actions/Orders';
import { getAll as getAllClients } from './actions/Clients';
import App from './components/presentational/App';
import OrdersService from './services/Orders';
import ClientsService from './services/Clients';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../node_modules/react-datepicker/dist/react-datepicker.min.css';
import '../../../node_modules/bulma/css/bulma.min.css';

const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    )
  )
);

const clientsService = new ClientsService();
clientsService.getAll().then(clients => store.dispatch(getAllClients(clients)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
