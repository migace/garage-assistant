let instance = null;

export class CarService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  async getAll() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cars`);

    return response.json();
  }
}
