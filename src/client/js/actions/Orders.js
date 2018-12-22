import { push } from 'connected-react-router'
import OrdersService from '../services/Orders';

export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const ADD_ORDER = 'ADD_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

export const ordersFetched = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  orders,
});

export const orderAdded = order => ({
  type: ADD_ORDER,
  order,
});

export const orderRemoved = orderId => ({
  type: REMOVE_ORDER,
  orderId,
});

export const fetchOrders = () => dispatch => {
  const ordersService = new OrdersService();
  ordersService.getAll().then(data => dispatch(ordersFetched(data)));
};

export const addOrder = (data) => dispatch => {
  const ordersService = new OrdersService();
  ordersService.addOrder(data).then(data => {
    dispatch(orderAdded(data));
    dispatch(push('/'));
  });
};

export const removeOrder = (orderId) => dispatch => {
  const ordersService = new OrdersService();
  ordersService.removeOrder(orderId).then(() => {
    dispatch(orderRemoved(orderId));
  });
};
