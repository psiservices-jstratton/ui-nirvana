import React from 'react';
import classNames from 'classnames';
import { useRouteMatch, Link } from 'react-router-dom';

export default function NavLink(props) {
    const {
        to,
        label,
        activeOnlyWhenExact,
        className,
        ...attributes
    } = props;

    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });

    const classes = classNames(
        className,
        'nav-link',
        'psi-nav-link',
        {
            disabled: attributes.disabled,
            active: match,
        }
    );

    return (
        <Link className={classes} to={to}>{label}</Link>
    )
}