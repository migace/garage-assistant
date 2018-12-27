import React, { Component } from 'react';

class AddClient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={this.props.className}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Client</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Surname" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-success">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddClient;