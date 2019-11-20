import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders, removeOrder } from '../../actions/Orders';
import { OrdersList } from './OrdersList';

class OrdersListWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    return <OrdersList { ...this.props } />;
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

export default connect(mapStateToProps, mapDispatchToProps)(OrdersListWrapper);
