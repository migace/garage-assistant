import React, { Component } from 'react';

class AddClient extends Component {
  constructor(props) {
    super(props);

    this.state = {           
      formControls: {
        name: '',
        surname: '',
      }
    };
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value,
      },
    }); 
  }

  submitHandler = (event) => {
    event.preventDefault();

    this.props.addClient({ ...this.state.formControls, regular: false });
    location.href = '/clients';
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.submitHandler}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Client</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" name="name" placeholder="Name" onChange={this.changeHandler} />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" name="surname" placeholder="Surname" onChange={this.changeHandler} />
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