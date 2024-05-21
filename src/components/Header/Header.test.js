import React from 'react';
import { Header } from "./Header";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mocking SASS import
jest.mock('./Header.scss', () => ({}));  // Adjust path as necessary

// Mock the logo image import
jest.mock('./../../assets/images/profile.webp', () => 'mocked-logo-path');

describe('Header Component', () => {
    test('should render Header component with logo', () => {
        const { getByAltText, getByText } = render(<Header />);

        // Check if the Header component is rendered
        const headerElement = getByText('Michael Nakashima | Naka');
        expect(headerElement).toBeInTheDocument();

        // Check if the logo image is rendered with the correct alt text
        const logoElement = getByAltText('My personal photo');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute('src', 'mocked-logo-path');
    });
});