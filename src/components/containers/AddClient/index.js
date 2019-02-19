import { connect } from 'react-redux';
import Component from './Component';
import { addClient } from '../../../actions/Clients';

const mapStateToProps = (({ clients }) => ({
  clients,
}));

const mapDispatchToProps = dispatch => ({
  addClient: (data) => dispatch(addClient(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
