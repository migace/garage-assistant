import React from 'react';
import Meta from '../components/presentational/Head';
import Footer from '../components/presentational/Footer';
import { Navbar } from '../components/presentational/Navbar';
import Menu from '../components/presentational/Menu';

import './style.css';

export default ({ children }) => (
  <>
    <Meta />
    <Navbar />
    <main className="section">
      <div className="container">      
        <Menu />      
        { children }
      </div>
    </main>
    <Footer />
  </>
);
