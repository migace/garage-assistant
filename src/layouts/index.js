import React from 'react';
import { Meta } from '../components/Meta';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Menu } from '../components/Menu';

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
