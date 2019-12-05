import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import NavLink from './NavLink';
import logo from '../../assets/images/logo.png';
import './nav.css';

export default function NavigationBar() {

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>
        <img src={logo} alt="Psi logo" />
      </NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink to="/" label="Home" />
        </NavItem>
        <NavItem>
          <NavLink to="/test" label="Test" />
        </NavItem>
        <NavItem>
          <DropdownMenu>
            <DropdownItem />
          </DropdownMenu>
        </NavItem>
      </Nav>
    </Navbar>
  );
}