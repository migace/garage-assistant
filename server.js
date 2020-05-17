import random from "lodash/random";
import { Server, Model, Factory, RestSerializer, belongsTo, hasMany, association } from "miragejs"
import faker from "faker";

export const mockServer = ({ environment = "development" }) => new Server({
  environment,
  serializers: {
    order: RestSerializer.extend({
      embed: true,
      include: ['client']
    }),
    application: RestSerializer,
  },
  models: {
    order: Model.extend({
      client: belongsTo("client"),
    }),
    client: Model.extend({
      orders: hasMany("order"),
    }),
  },
  factories: {
    order: Factory.extend({      
      endDate() {
        return faker.date.past(0);
      },
      startDate() {
        return faker.date.past(0, this.endDate);
      },
      description() {
        return faker.lorem.sentence();
      },
      car() {
        const cars = [
          {
            "Alfa Romeo": [
              "145", "147", "Giulia", "Stelvio",
            ],
          },
          {
            "Audi": [
              "A1", "A2", "A3", "A4", "A5", "A6", "A7", "TT", "Q5",
            ],
          },
          {
            "Daewoo": [
              "Evanda", "Matiz", "Lanos", "Kalos", "Tico",
            ],
          },
          {
            "Honda": [
              "Accord", "Civic", "Legend", "Prelude", "Stream",
            ],
          },
          {
            "Jaguar": [
              "F-Type", "S-Type", "XF", "XJ", "XK",
            ]
          },
          {
            "Mercedes-Benz": [
              "CLA", "GLC", "Klasa C", "Sprinter", "W123", "W201",
            ],
          },
        ];
        const index = Math.floor(Math.random() * cars.length);
        const manufacturer = Object.keys(cars[index])[0];
        const model = cars[index][manufacturer][random(cars[index][manufacturer].length - 1)];
        const minYear = 2002;
        const maxYear = 2019;
        const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;

        return {
          manufacturer,
          model,
          year,
        }
      },
      completed: () => !!Math.floor(Math.random() * 2),
    }),
    client: Factory.extend({
      name: () => faker.name.findName(),
      phone: () => faker.phone.phoneNumber(),
      email: () => faker.internet.email(),
      regular: () => !!Math.floor(Math.random() * 2),
    }),
  },
  seeds(server) {
    server.createList('client', 15).forEach((client) => {
      server.createList('order', 1, { client });
    });
  },
  routes() {
    this.namespace = "api"
    
    this.get('/orders');
    this.get('/clients');
    this.get('/cars', { cars: {
      "Alfa Romeo": [
        "145", "147", "Giulia", "Stelvio",
      ],
      "Audi": [
        "A1", "A2", "A3", "A4", "A5", "A6", "A7", "TT", "Q5",
      ],
      "Daewoo": [
        "Evanda", "Matiz", "Lanos", "Kalos", "Tico",
      ],
      "Honda": [
        "Accord", "Civic", "Legend", "Prelude", "Stream",
      ],
      "Jaguar": [
        "F-Type", "S-Type", "XF", "XJ", "XK",
      ],
      "Mercedes-Benz": [
        "CLA", "GLC", "Klasa C", "Sprinter", "W123", "W201",
      ],
    }});
  },
});
