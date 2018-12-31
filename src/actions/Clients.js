import { API_BASE_URL } from '../constants';

export const GET_ALL = 'GET_ALL_CLIENTS';

export const getAll = (clients) => ({
  type: GET_ALL,
  clients
});

export const addClientRequest = (data) => {
  
}