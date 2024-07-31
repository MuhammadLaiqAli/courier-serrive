// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register-user">Register User</Link></li>
      <li><Link to="/register-package">Register Package</Link></li>
      <li><Link to="/request-pickup">Request Pickup</Link></li>
      <li><Link to="/users">All users</Link></li>
      <li><Link to="/packages">All packages</Link></li>
    </ul>
  </nav>
);

export default Navbar;
