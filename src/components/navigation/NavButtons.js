import React, { Fragment } from 'react';
import { Button, Nav, NavItem } from 'reactstrap';

export default function NavButtons() {
    return (
        <Fragment>
            <Nav className="mr-auto">
                <Button color="secondary" className="psi-nav-buttons">Prev</Button>
                <Button color="secondary" className="psi-nav-buttons">Next</Button>
            </Nav>
            <Nav>
                <NavItem>
                    <Button color="secondary" className="psi-nav-buttons">Suspend</Button>
                </NavItem>
                <NavItem>
                    <Button color="secondary" className="psi-nav-buttons">End</Button>
                </NavItem>
            </Nav>
        </Fragment>
    )
}