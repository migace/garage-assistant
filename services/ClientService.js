let instance = null;

export class ClientService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  async getAll() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`);

    return response.json();
  }

  async addClient(data) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }
}
