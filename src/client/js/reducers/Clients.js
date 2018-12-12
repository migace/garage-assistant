import { GET_ALL } from '../actions/Clients';

const initialState = [];

const Clients = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL:
      return [...state, ...action.clients];
    default:
      return state;
  }
}

export default Clients;