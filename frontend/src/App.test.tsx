import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
    beforeEach(() => {
        render(<App/>);
    });

    it('should show the create a new test button', () => {
        const button = screen.getByText(/create a new test/i);
        expect(button).toBeInTheDocument();
    });
});
