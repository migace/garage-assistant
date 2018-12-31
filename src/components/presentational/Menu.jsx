import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

const Menu = () => (
  <section className="section">
    <div className="level">
      <div className="level-left">
        <div className="buttons">
          <Link href="/">
            <a className="button is-link is-medium">
              <span className="icon is-small">
                <FontAwesomeIcon icon="equals" />
              </span>
              <span>Orders List</span>
            </a>
          </Link>
          <Link href="/clients-list">
            <a className="button is-link is-medium">
              <span className="icon is-small">
                <FontAwesomeIcon icon="equals" />
              </span>
              <span>Clients List</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="level-right">
        <div className="buttons">
          <Link href="/add-order">
            <a className="button is-success is-medium">
              <span className="icon is-small">
                <FontAwesomeIcon icon="plus" />
              </span>
              <span>Add Order</span>
            </a>
          </Link>
          <Link href="/add-client">
            <a className="button is-success is-medium">
              <span className="icon is-small">
                <FontAwesomeIcon icon="plus" />
              </span>
              <span>Add Client</span>
            </a>
          </Link>            
        </div>
      </div>
    </div>          
  </section>
);

export default Menu;
