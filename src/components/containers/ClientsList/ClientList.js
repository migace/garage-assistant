import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Table } from './styles';

class ClientsList extends Component {
  async componentDidMount() {
    await this.props.fetchClients();
  }

  render() {
    const { clients } = this.props;

    return (
      <Table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Regular</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>
                <span className="icon">
                  { client.regular ? (
                    <FontAwesomeIcon className="has-text-success" icon="check" />
                  ) : (
                    <FontAwesomeIcon className="has-text-grey-light" icon="times" />
                  )}
                </span>
              </td>     
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default ClientsList;
