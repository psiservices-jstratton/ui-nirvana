import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

describe('<NavBar />', () => {
    // TODO: Convert to react-testing-library and maybe a more useful assertion
    xit('should render without crashing', () => {
        shallow(
            <Router initialEntries={["/"]}>
                <NavBar />
            </Router>
        );
    });
});
