import React from 'react';
import { getByText, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactDetails } from './ContactDetails';
import { mdiEmail, mdiWebBox, mdiLinkedin, mdiGithub } from '@mdi/js';
import { Badge } from '../Badge/Badge';

describe('ContactDetails component', () => {
    test('should render the ContactDetails component with badges', () => {
        const { getByTestId, getByText } = render(<ContactDetails />);

        // Check if the ContactDetails component is rendered
        const contactDetailsElement = getByTestId('contactDetails');
        expect(contactDetailsElement).toBeInTheDocument();

        // Check if the "Contact Details" heading is rendered
        const headingElement = getByText('Contact Details');
        expect(headingElement).toBeInTheDocument();

    });
});
