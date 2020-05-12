import { API_BASE_URL } from '../constants';

let instance = null;

export class CarService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  async getAll() {
    const response = await fetch(`${API_BASE_URL}/cars`);

    return response.json();
  }
}
