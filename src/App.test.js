import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitForElement } from '@testing-library/react';
import App from './App';


describe('<App />',  () => {
    // Considered a basic 'smoke test'
    it('renders without crashing', () => {
        const AppRoot = render(<App />);
        expect(AppRoot).toMatchSnapshot();
    });

    it('should begin on home page', async () => {
        const history = createMemoryHistory();
        const { getByText } = render(
            <Router history={history}>
                <App />
            </Router>
        );
        // Stupid assertion. Probably a better way to check a home page header or that we're on the initial
        // app route?
        const homeHeadingNode = await waitForElement(() => getByText('This is the home page.'));
        expect(homeHeadingNode).toHaveTextContent('This is the home page.');
    });
});
