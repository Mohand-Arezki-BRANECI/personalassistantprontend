import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Supprimer la partie du logo */}
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
            
            <li>
              <NavLink to="/deonnexion" activeClassName="active">Deconnexion</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
