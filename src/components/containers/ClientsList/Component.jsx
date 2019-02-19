import React, { Component } from 'react';
import shortid from 'shortid';

class ClientsList extends Component {
  async componentDidMount() {
    const response = await this.props.fetchClients();
  }

  render() {
    const { clients } = this.props;

    return (
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
    )
  }
}

export default ClientsList;
