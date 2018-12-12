import { GET_ALL } from '../actions/Orders';

const initialState = [];

const Orders = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL:
      return [...state, ...action.orders];
    default:
      return state;
  }
}

export default Orders;