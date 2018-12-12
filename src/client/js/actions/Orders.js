export const GET_ALL = 'GET_ALL_ORDERS';

export const getAll = (orders) => ({
  type: GET_ALL,
  orders
});
