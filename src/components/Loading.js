import React from 'react';
import styled from 'styled-components/macro';
import { Spinner } from 'reactstrap';

export default function Loading() {
    const CenteredSpinner = styled(Spinner)`
      display: block;
      position: fixed;
      top: 50%;
      z-index: 1030;
      right: 50%;
    `;

    return (
        <CenteredSpinner size="large" color="primary" />
    );
}