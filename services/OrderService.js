let instance = null;

export class OrderService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  async getAll() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`);

    return response.json();
  }

  async addOrder(data) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json().then((data) => data);
  }

  async removeOrder(orderId) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/${orderId}`, {
      method: "DELETE",
    });

    return response.json();
  }
}
