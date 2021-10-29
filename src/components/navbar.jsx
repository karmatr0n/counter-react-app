import React, { Component } from 'react'
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-ligth">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-seconday">{totalCounters}</span>
      </a>
    </nav>
  );

}
 
export default NavBar;