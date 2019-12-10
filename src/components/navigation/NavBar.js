import React from 'react';
import { useRouteMatch } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import NavButtons from './NavButtons';
import NavLink from './NavLink';
import logo from '../../assets/images/logo.png';
import './nav.css';

export default function NavigationBar() {
    const isTestRoute = useRouteMatch('/test');

    return (
        <Navbar color="light" light expand="md" className="psi-nav-bar">
            <NavbarBrand href="/">
                <img src={logo} alt="Psi logo" />
            </NavbarBrand>
            {
                isTestRoute ? (
                    <NavButtons />
                ) : (
                    <Nav>
                        <NavItem>
                            <NavLink to="/test" label="Test" />
                        </NavItem>
                    </Nav>
                )
            }
        </Navbar>
    );
}