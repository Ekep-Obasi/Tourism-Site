import React, { useState } from 'react';
import './NavBar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/NavBar-Logo.png';
import Buttons from '../Buttons/Buttons';

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/tourpackage">Tour Package</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
    </ul>
  );
}

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="tourism-site__navbar-container">
      <div className="tourism-site__navbar">
        <div className="tourism-site__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="tourism-site__navbar-links">
          <Menu />
        </div>
      </div>
      <div className="tourism-site__navbar-search-icon">
        <i className="fa fa-search" aria-hidden="true" />
        <Buttons title="Sign In" color="#C7923E" />
      </div>
      <div className="tourism-site__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="tourism-site__navbar-menu-container scale-up-center">
            <div className="tourism-site__navbar-menu__container-links">
              <ul>
                <li>
                  <a href="#sign"> Sign In</a>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/tourpackage">Tour Package</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
