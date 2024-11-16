import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders 시작하기 button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/시작하기/i);
  expect(buttonElement).toBeInTheDocument();
});