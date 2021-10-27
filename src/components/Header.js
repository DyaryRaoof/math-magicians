import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="navbar-wrapper">
    <span id="logo" data-testid="logo">Math Magicians</span>
    <span>
      <NavLink to="/" exact activeClassName="activated-link">Home</NavLink>
      <span> | </span>
      <NavLink to="/calculator" exact activeClassName="activated-link">Calculator</NavLink>
      <span> | </span>
      <NavLink to="/quote" exact activeClassName="activated-link">Quote</NavLink>
    </span>
  </div>
);

export default Header;
