import React from 'react';
import shortid from 'shortid';

const OrdersTable = ({ orders }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Car</th>
        <th>Client</th>
        <th>Description</th>
        <th>Comments</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={shortid()}>
          <td>{ order.id }</td>
          <td>{ order.startDate }</td>
          <td>{ order.endDate }</td>
          <td>{ order.car }</td>
          <td>{ order.client }</td>
          <td>{ order.desc }</td>
          <td>{ order.comments }</td>
          <td>
            <span className="icon">
              <i className={"fas " + (order.completed ? 'fa-check' : 'fa-times')}></i>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrdersTable;
