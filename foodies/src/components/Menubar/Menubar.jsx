import React from 'react';
import './Menubar.css';
import { assets } from '../../assets/assets'; 
import { Link } from 'react-router-dom';

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Left side - Logo */}
        <div className="d-flex align-items-center">
          <img src={assets.logo} alt="logo" className="mx-4" height={60} width={60} />
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/ExploreFood">Explore</Link></li>
            <li className="nav-item">
              <Link className="nav-link"  to="/Contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right side - Cart & Buttons */}
        <div className="Menubar-right d-flex align-items-center gap-3">
          <div className="cart-icon position-relative">
            <img src={assets.cart} alt="cart" height={30} width={30} />
            <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              5
            </span>
          </div>
          <button className="btn btn-outline-primary px-3">Login</button>
          <button className="btn btn-outline-success px-3">Register</button>
        </div>

      </div>
    </nav>
  );
};

export default Menubar;
