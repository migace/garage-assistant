import { FETCH_ORDERS_SUCCESS, REMOVE_ORDER } from '../actions/Orders';

const initialState = [];

const Orders = (orders = initialState, action) => {
  switch(action.type) {
    case FETCH_ORDERS_SUCCESS:
      return action.orders;
    case REMOVE_ORDER:
      return orders.filter(order => order.id !== action.orderId);
    default:
      return orders;
  }
}

export default Orders;