import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = ({ orders }) => ({
  orders,
});

export default connect(mapStateToProps)(Component);
