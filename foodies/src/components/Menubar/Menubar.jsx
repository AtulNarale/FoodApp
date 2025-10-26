import React, { useContext, useState } from 'react';
import './Menubar.css';
import { assets } from '../../assets/assets'; 
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Menubar = () => {

  const [active,setActive ] = useState("home");

  const { quantities } = useContext(StoreContext); 
  const uniqueItemsIncart = Object.values(quantities || {}).filter(qty => qty > 0).length;

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Left side - Logo */}
        <div className="d-flex align-items-center">
          <Link to="/"> <img src={assets.logo} alt="logo" className="mx-4" height={60} width={60} /></Link>
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className={active === 'home' ? "nav-link fw-bold active": "nav-link"} to="/" onClick={()=> setActive('home')}>Home</Link></li>
            <li className="nav-item">
              <Link className={active === 'explore' ? "nav-link fw-bold active": "nav-link"} to="/ExploreFood" onClick={()=> setActive('explore')}>Explore</Link></li>
            <li className="nav-item">
              <Link className={active === 'contact' ? "nav-link fw-bold active" : "nav-link"}  to="/Contact" onClick={()=> setActive('contact')}>Contact</Link></li>
          </ul>
        </div>

        {/* Right side - Cart & Buttons */}
        <div className="Menubar-right d-flex align-items-center gap-3">
          <div className="cart-icon position-relative">
            <Link to="/cart"> <img src={assets.cart} alt="cart" height={30} width={30} /></Link>
            <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {uniqueItemsIncart}
            </span>
          </div>
          <button className="btn btn-outline-primary px-3" onClick={()=>navigate('/login')}>Login</button>
          <button className="btn btn-outline-success px-3" onClick={()=>navigate('/register')}>Register</button>
        </div>

      </div>
    </nav>
  );
};

export default Menubar;
