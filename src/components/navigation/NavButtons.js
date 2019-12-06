import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

export default function NavButtons() {
    return (
        <Fragment>
            <div>
                <Button color="secondary" className="psi-nav-buttons">Prev</Button>
                <Button color="secondary" className="psi-nav-buttons">Next</Button>
            </div>
            <div style={{ alignSelf: 'flex-end' }}>
                <Button color="secondary" className="psi-nav-buttons">Suspend</Button>
                <Button color="secondary" className="psi-nav-buttons">End</Button>
            </div>
        </Fragment>
    )
}