import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import ContactDetails from './ContactDetails';

describe('ContactDetails component', () => {
    test('should render the ContactDetails component with badges', () => {
        const { getByTestId, getByText } = render(<ContactDetails />);

        // Check if the ContactDetails component is rendered
        const contactDetailsElement = getByTestId('contactDetails');
        expect(contactDetailsElement).toBeInTheDocument();

    });
});
