import { API_BASE_URL } from '../constants';
import OrdersService from '../services/Orders';

export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const ADD_ORDER = 'ADD_ORDER';

export const ordersFetched = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  orders,
});

export const orderAdded = order => ({
  type: ADD_ORDER,
  order,
});

export const fetchOrders = () => dispatch => {
  const ordersService = new OrdersService();
  ordersService.getAll().then(data => dispatch(ordersFetched(data)));
};

export const addOrder = (data) => dispatch => {
  const ordersService = new OrdersService();
  ordersService.addOrder(data).then(data => dispatch(orderAdded(data)));
};
