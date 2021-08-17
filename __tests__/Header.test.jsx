/**
 * @jest-environment jsdom
 */

// For more info on testing in next js :  https://nextjs.org/docs/testing

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe('Header component test cases', () => {
  test('Heading should render correctly', () => {
    render(<Header />);
    const headingElement = screen.getByText(/Wikipedia/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('Theme button should switch theme on click', () => {
    let darkTheme = false;
    // mock function of useState.
    function setTheme() {
      darkTheme = !darkTheme;
    }

    render(<Header setTheme={setTheme} />);
    const themeButton = screen.getByTestId('themeButton');
    userEvent.click(themeButton);
    expect(darkTheme).toEqual(true);
  });

  test('Clicking theme button 2 times should bring default theme back', () => {
    let darkTheme = false;
    // mock function of useState.
    function setTheme() {
      darkTheme = !darkTheme;
    }

    render(<Header setTheme={setTheme} />);
    const themeButton = screen.getByTestId('themeButton');
    userEvent.click(themeButton);
    userEvent.click(themeButton);
    expect(darkTheme).toEqual(false);
  });
});
