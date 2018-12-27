import React from 'react';

const Navbar = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">Garage Assistant</a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
);

export default Navbar;
