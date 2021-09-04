
import './App.css';
import React from 'react';
// import {
//   Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container, FormInline,
//   Dropdown, DropdownToggle, DropdownMenu, DropdownItem
// } from 'mdbreact';





function NavigationBar(props) {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
    <div class="container-fluid">
      <h1> <strong>
      <a class="navbar-brand" href="#">RedCherry</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </strong>
      </h1>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ol class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"href="#">LogIn</a>
          </li>
          {/* <script src ="DSC01925-Edit.jpg" async defer></script> */}
        </ol>
        
      </div>
    </div>
  </nav>

  );
}
export default NavigationBar;