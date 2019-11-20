import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Table } from './styles';

import {
  getCar,
  getDescription
} from './utils';

export const OrdersList = ({ orders, removeAction }) => (
  <Table className="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>ID</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Car</th>
        <th>Client</th>
        <th>Description</th>
        <th>Completed</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{moment(order.startDate).format("MM/DD/YY")}</td>
          <td>{moment(order.endDate).format("MM/DD/YY")}</td>
          <td>{getCar(order.car)}</td>
          <td>{order.client.name}</td>
          <td>{getDescription(order.description)}</td>
          <td>
            <span className="icon">
              { order.completed ? (
                <FontAwesomeIcon className="has-text-success" icon="check" />
              ) : (
                <FontAwesomeIcon className="has-text-grey-light" icon="times" />
              )}
            </span>
          </td>
          <td>
            <a className="button is-danger is-small" onClick={(e) => removeAction(e, order.id)}>Remove</a>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);
