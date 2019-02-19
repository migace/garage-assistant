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

export const fetchOrders = () => async dispatch => {
  const ordersService = new OrdersService();
  const orders = await ordersService.getAll();

  dispatch(ordersFetched(orders));
};

export const addOrder = (data) => async dispatch => {
  const ordersService = new OrdersService();
  const order = await ordersService.addOrder(data);

  dispatch(orderAdded(order));
};

export const removeOrder = (orderId) => async dispatch => {
  const ordersService = new OrdersService();
  await ordersService.removeOrder(orderId);

  dispatch(orderRemoved(orderId));
};
