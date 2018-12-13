import { FETCH_ORDERS_SUCCESS } from '../actions/Orders';

const initialState = [];

const Orders = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ORDERS_SUCCESS:
      return action.orders;
    default:
      return state;
  }
}

export default Orders;