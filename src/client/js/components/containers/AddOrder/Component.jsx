import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import shortid from 'shortid';
import AddClient from '../AddClient';
import { APP_ELEMENT } from '../../../constants';
import styles from './style.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    zIndex: '100',
  }
};

Modal.setAppElement(APP_ELEMENT);

class AddOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      modalIsOpen: false,
      formControls: {
        description: {
          value: ''
        },
        comments: {
          value: ''
        },
        client: {
          value: 'Select'
        },
        car: {
          value: ''
        },
        phone: {
          value: ''
        },
      }
    };

    this.changeHandlerDatepicker = this.changeHandlerDatepicker.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  changeHandlerDatepicker(date) {
    this.setState({
      startDate: date,
      endDate: new Date(),
    });
  }

  changeHandler(event) {   
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          value
        }
      }
    }); 
  }

  submitHandler(event) {
    event.preventDefault();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // ---
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.submitHandler}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Car</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" placeholder="Toyota Prius" name="car" onChange={this.changeHandler} />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>            
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Client</label>
          </div>
          <div className="field-body">
            <div className="field has-addons">
              <p className="control select">
                <select name="client" onChange={this.changeHandler} value={this.state.formControls.client.value}>
                  <option value="Select">Select</option>
                  {this.props.clients.map(client => {
                    const clientRecord = `${client.name} ${client.surname}`;

                    return <option key={clientRecord} value={clientRecord}>{clientRecord}</option>
                  })}
                </select>
              </p>
              <p className="control">
                <a className="button is-link" onClick={this.openModal}>
                  <span className="icon">
                    <i className="far fa-address-card"></i>
                  </span>
                  <span>Add a new client</span>
                </a>
              </p>
            </div>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">
                    +48
                  </a>
                </p>
                <p className="control is-expanded">
                  <input className="input" type="tel" placeholder="Contact phone number" name="phone" onChange={this.changeHandler}  />
                </p>
              </div>
              <p className="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Start date</label>
          </div>
          <div className="field-body">
            <DatePicker
              className="input"
              popperClassName={styles.datepicker}
              selected={this.state.startDate}
              onChange={this.changeHandlerDatepicker}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">End date</label>
          </div>
          <div className="field-body">
            <DatePicker
              className="input"
              popperClassName={styles.datepicker}
              selected={this.state.endDate}
              onChange={this.changeHandlerDatepicker}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Description</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea 
                  className="textarea" 
                  placeholder="Explain how we can help you"
                  name="description" 
                  onChange={this.changeHandler} 
                >
                </textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Comments</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea 
                  className="textarea" 
                  placeholder="Explain how we can help you"
                  name="comments" 
                  onChange={this.changeHandler} 
                >
                </textarea>
              </div>
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

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Add Client"
          style={customStyles}
        >
          <AddClient />
        </Modal>
      </form>
    );
  }
}

AddOrder.propTypes = {
  className: PropTypes.string.isRequired,
};

export default AddOrder;
