import React from 'react';
import { useRouteMatch } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownItem,
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
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                <img src={logo} alt="Psi logo" />
            </NavbarBrand>
            <Nav navbar>
                {
                    isTestRoute ? <NavButtons /> : (
                        <NavItem>
                            <NavLink to="/test" label="Test" />
                        </NavItem>
                    )
                }
                <NavItem>
                    <DropdownMenu>
                        <DropdownItem />
                    </DropdownMenu>
                </NavItem>
            </Nav>
        </Navbar>
    );
}