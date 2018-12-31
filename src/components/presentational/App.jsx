import React, { Fragment } from 'react';
import Navbar from './Navbar';
import AddOrder from '../containers/AddOrder';
import AddClient from '../containers/AddClient';
import OrdersList from '../containers/OrdersList';
import ClientsList from '../containers/ClientsList';
import Menu from './Menu';

const App = () => (
  <Fragment>
    <Navbar />
    <div className="container">      
      <Menu />      
      <div className="columns is-multiline is-centered">                
        <div className="column">
        </div>
      </div>
    </div>            
  </Fragment>
);

export default App;
