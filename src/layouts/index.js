import React from 'react';
import Meta from '../components/presentational/Head';
import Footer from '../components/presentational/Footer';
import Navbar from '../components/presentational/Navbar';
import Menu from '../components/presentational/Menu';

import './style.css';

export default ({ children }) => (
  <>
    <Meta />
    <Navbar />
    <div id="wrapper" className="container">      
      <Menu />      
      <div className="columns is-multiline is-centered">                
        <div className="column">
            { children }
        </div>
      </div>
    </div>
    <Footer />
  </>
);
