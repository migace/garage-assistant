import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../../actions/Orders';
import Component from './Component';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
