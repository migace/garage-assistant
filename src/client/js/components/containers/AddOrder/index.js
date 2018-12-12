import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (({ clients }) => ({
  clients,
}));

export default connect(mapStateToProps)(Component);
