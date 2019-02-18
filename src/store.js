import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

export function initializeStore (initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
