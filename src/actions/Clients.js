import ClientsService from '../services/Clients';

export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const ADD_CLIENT = 'ADD_CLIENT';

export const clientsFetched = clients => ({
  type: FETCH_CLIENTS_SUCCESS,
  clients,
});

export const clientAdded = client => ({
  type: ADD_CLIENT,
  client,
});

export const fetchClients = () => async dispatch => {
  const clientsService = new ClientsService();
  const response = await clientsService.getAll();

  dispatch(clientsFetched(response));
};

export const addClient = (data) => async dispatch => {
  const clientsService = new ClientsService();
  const clientData = await clientsService.addClient(data);

  dispatch(clientAdded(clientData));
};
