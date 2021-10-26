import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navbar-wrapper">
    <span id="logo">Math Magicians</span>
    <span>
      <NavLink to="/" activeClassName="activated-link">Home</NavLink>
      <span> | </span>
      <NavLink to="/calculator" activeClassName="activated-link">Calculator</NavLink>
      <span> | </span>
      <NavLink to="/quote" activeClassName="activated-link">Quote</NavLink>
    </span>

  </div>
);

export default Header;
