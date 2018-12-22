import { API_BASE_URL } from '../constants';

let instance = null;

class Orders {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}/orders`)
        .then(data => data.json())
        .then(data => resolve(data));
      });
  }

  addOrder(data) {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(data => resolve(data));
    });    
  }

  removeOrder(orderId) {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}/orders/${orderId}`, {
        method: 'DELETE',
      }).then(() => resolve(orderId));
    });
  }
}

export default Orders;
