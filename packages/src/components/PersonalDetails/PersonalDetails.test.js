import React from 'react';
import PersonalDetails from "./PersonalDetails";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Trans, useTranslation } from "react-i18next";

// Mock react-i18next
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (key) => key,
      i18n: {
        changeLanguage: jest.fn(),
      },
    }),
    Trans: ({ children }) => children,
  }));

describe('Header Component', () => {
    test('should render Header component with logo', () => {
        // Render the Button component
        const { getByTestId } = render(<PersonalDetails />);

        // Check if the Button component is rendered
        const personalDetailsElement = getByTestId('personalDetails');
        expect(personalDetailsElement).toBeInTheDocument();
    });
});