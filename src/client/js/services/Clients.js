import { API_BASE_URL } from '../constants';

let instance = null;

class Clients {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}/clients`)
        .then(data => data.json())
        .then(data => {
          resolve(data);
        });
      });
  }
}

export default Clients;
