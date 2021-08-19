/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('Footer should render correctly', () => {
  render(<Footer />);
  const footerTitle = screen.getByText(/All data used in this App is from Marvel API/i);
  expect(footerTitle).toBeInTheDocument();
});
