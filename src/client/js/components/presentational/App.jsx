import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AddOrder from '../containers/AddOrder';
import AddClient from '../containers/AddClient';
import OrdersList from '../containers/OrdersList';
import ClientsList from '../containers/ClientsList';
import Menu from './Menu';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <div className="container">
        <Menu />
        <div className="columns is-multiline is-centered">
          <Route exact path="/add-order" render={ () => <AddOrder className="column is-8 is-offset-2" /> } />
          <Route exact path="/add-client" render={ () => <AddClient className="column is-8 is-offset-2" /> } />          
          <div className="column">
            <Route exact path="/" component={ OrdersList } />
            <Route exact path="/clients-list" render={ () => <ClientsList className="column is-8 is-offset-2" /> } />
          </div>
        </div>
      </div>            
    </Fragment>
  </Router>
);

export default App;
