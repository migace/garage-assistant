import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
//import ClientsService from './services/Clients';
//import { getAll as getAllClients } from './actions/Clients';
  
//const clientsService = new ClientsService();
//clientsService.getAll().then(clients => store.dispatch(getAllClients(clients)));

export function initializeStore (initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
