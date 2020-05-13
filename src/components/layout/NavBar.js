import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar bg-dark mb-5 navbar-dark">
      <h1 className="nav-brand text-light">
        <i className="fab fa-github"></i> Github Finder
      </h1>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
