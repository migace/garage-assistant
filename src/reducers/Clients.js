import { FETCH_CLIENTS_SUCCESS, ADD_CLIENT } from '../actions/Clients';

const initialState = [];

const Clients = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return action.clients;
    case ADD_CLIENT:
      return [...state, action.client];
    default:
      return state;
  }
}

export default Clients;