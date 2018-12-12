import React from 'react';
import shortid from 'shortid';

const Component = ({ clients }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Regular</th>
      </tr>
    </thead>
    <tbody>
      {clients.map(client => (
        <tr key={shortid()}>
          <td>{ client.id }</td>
          <td>{ client.name }</td>
          <td>{ client.surname }</td>
          <td>
            <span className="icon">
              <i className={"fas " + (client.regular ? 'fa-check' : 'fa-times')}></i>
            </span>
          </td>     
        </tr>
      ))}
    </tbody>
  </table>
);

export default Component;
