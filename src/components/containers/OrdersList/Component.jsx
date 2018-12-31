import React from 'react';
import shortid from 'shortid';
import moment from 'moment';

const Component = ({ orders, removeAction }) => (
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
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={shortid()}>
          <td>{ order.id }</td>
          <td>{ moment(order.startDate).format("MMM Do YY") }</td>
          <td>{ moment(order.endDate).format("MMM Do YY") }</td>
          <td>{ order.car }</td>
          <td>{ order.client }</td>
          <td>{ order.desc }</td>
          <td>{ order.comments }</td>
          <td>
            <span className="icon">
              <i className={"fas " + (order.completed ? 'fa-check' : 'fa-times')}></i>
            </span>
          </td>
          <td>
            <a className="button is-danger" onClick={(e) => removeAction(e, order.id)}>Remove</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Component;
