import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { Badge } from './Badge'; // Adjust the import path as necessary

// Mocking SASS import
jest.mock('./badge.scss', () => ({}));  

// Mocking external libraries
jest.mock('@mdi/react', () => {
    return {
        __esModule: true,
        default: (props) => <div data-testid="icon">{props.path}</div>,
    };
});

jest.mock('../Avatar/Avatar', () => {
    return {
        __esModule: true,
        default: ({ children }) => <div data-testid="avatar">{children}</div>,
    };
});

jest.mock('@mdi/js', () => {
    return {
        __esModule: true,
        mdiReload: 'mdiReloadMock',  // Mocking the mdiReload value
    };
});

describe('Badge component', () => {
    test('should render icon, label, and text', () => {
        const iconPath = 'mdiTestIcon';
        const label = 'Test Label';
        const text = 'Test Text';

        const { getByText, getByTestId } = render(<Badge icon={iconPath} label={label} text={text} />);

        // Check if Avatar component renders
        expect(getByTestId('avatar')).toBeInTheDocument();

        // Check if Icon component renders with the correct path
        expect(getByTestId('icon')).toHaveTextContent(iconPath);

        // Check if label and text are rendered
        expect(getByText(label)).toBeInTheDocument();
        expect(getByText(text)).toBeInTheDocument();
    });

    test('should render default values when no props are provided', async () => {
        const { container, getByTestId } = render(<Badge />);

        // Check if Avatar component renders
        expect(getByTestId('avatar')).toBeInTheDocument();

        // Check if Icon component renders with the default mdiReload path
        expect(getByTestId('icon')).toHaveTextContent('mdiReloadMock');

        // Check if empty strings are rendered for label and text by class names
        waitFor(() => expect(container.querySelector('.badge--label')).toHaveTextContent(''));
        waitFor(() => expect(container.querySelector('.badge--text')).toHaveTextContent(''));
    });
});
