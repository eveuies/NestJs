// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NestJs title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NestJs/i);
    expect(titleElement).toBeInTheDocument();
});
