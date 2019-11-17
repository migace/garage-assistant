import { API_BASE_URL } from '../constants';

let instance = null;

class Orders {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  async getAll() {
    const response = await fetch(`${API_BASE_URL}/orders?_expand=client`);

    return response.json();
  }

  async addOrder(data) {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return response.json();
  }

  async removeOrder(orderId) {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
      method: 'DELETE',
    });

    return response.json();
  }
}

export default Orders;
