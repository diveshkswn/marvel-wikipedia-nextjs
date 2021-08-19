/**
 * @jest-environment jsdom
 */

/* eslint-disable max-len */

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import sampleCharacterData from '../utils/marvelCharacterData.json';
import moreCharacterData from '../utils/moreCharacterData.json';
import Homepage from '../components/HomePage';

// workaround for next/image jest problem
beforeEach(() => {
  process.env.NODE_ENV = 'production';
});

// workaround for next/image jest problem
afterEach(() => {
  process.env.NODE_ENV = 'test';
});

// mocking fetch
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    ...moreCharacterData,
  }),
}));

describe('Index page tests', () => {
  test('index page should render correctly', async () => {
    render(<Homepage characterData={sampleCharacterData} />);
    screen.getByText(/Found/i);
  });

  test('Count of characters displayed should be correct', () => {
    render(<Homepage characterData={sampleCharacterData} />);
    const foundCharacterElement = screen.getByText(/Found/i);
    const characterCardElements = screen.getAllByTestId('characterCard');
    // console.log(characterCardElements.length);
    expect(foundCharacterElement.innerHTML.split(' ')[1]).toBe(characterCardElements.length > 0 && characterCardElements.length.toString());
  });

  test('Load more characters should work', async () => {
    render(<Homepage characterData={sampleCharacterData} />);
    // const characterCardElements = screen.getAllByTestId('characterCard');
    // const currentCharacterCount = characterCardElements.length > 0 && characterCardElements.length;
    const loadMoreCharButtonElement = screen.getByText(/Load More/i);
    userEvent.click(loadMoreCharButtonElement); // Clicking load more button will add 20 more character to list
    const updatedCharacterCardElements = await screen.findByText(/found/i);
    expect(updatedCharacterCardElements.innerHTML.split(' ')[1]).toEqual('25');
  });
});
