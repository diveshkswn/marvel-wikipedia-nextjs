/**
 * @jest-environment jsdom
 */

// For more info on testing in next js :  https://nextjs.org/docs/testing

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Heading should render correctly', () => {
  render(<Header />);
  const headingElement = screen.getByText(/Wikipedia/i);
  expect(headingElement).toBeInTheDocument();
});
