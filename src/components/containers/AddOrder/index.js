import { connect } from 'react-redux';
import Component from './AddOrder';
import { addOrder } from '../../../actions/Orders';

const mapStateToProps = (({ clients }) => ({
  clients,
}));

const mapDispatchToProps = dispatch => ({
  addOrder: (data) => dispatch(addOrder(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
