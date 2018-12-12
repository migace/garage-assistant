import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <section className="section">
    <div className="level">
      <div className="level-left">
        <div className="buttons">
          <Link to="/" className="button is-link is-medium">
            <span className="icon is-small">
              <i className="fas fa-equals"></i>
            </span>
            <span>Orders List</span>
          </Link>
          <Link to="/clients-list" className="button is-link is-medium">
            <span className="icon is-small">
              <i className="fas fa-equals"></i>
            </span>
            <span>Clients List</span>
          </Link>
        </div>
      </div>
      <div className="level-right">
        <div className="buttons">
          <Link to="/add-order" className="button is-success is-medium">
            <span className="icon is-small">
              <i className="fas fa-plus"></i>
            </span>
            <span>Add Order</span>
          </Link>
          <Link to="/add-client" className="button is-success is-medium">
            <span className="icon is-small">
              <i className="fas fa-plus"></i>
            </span>
            <span>Add Client</span>
          </Link>            
        </div>
      </div>
    </div>          
  </section>
);

export default Menu;
