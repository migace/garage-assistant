import { connect } from 'react-redux';
import Component from './ClientList';
import { fetchClients } from '../../../actions/Clients';

const mapStateToProps = ({ clients }) => ({
  clients,
});

const mapDispatchToProps = dispatch => ({
  fetchClients: () => dispatch(fetchClients()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
