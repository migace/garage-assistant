import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders, removeOrder } from '../../../actions/Orders';
import Component from './OrdersList';

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    return <Component { ...this.props } />;
  }
}

const mapStateToProps = ({ orders }) => ({
  orders,
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
  removeAction: (e, orderId) => {
    e.preventDefault();
    dispatch(removeOrder(orderId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
