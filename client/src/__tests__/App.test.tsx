import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { App } from '../pages/App';

test('App loads and has main page and shared layer components', async () => {
  // ARRANGE
  render(<App />);

  // ACT
  const mainPage = await screen.findByTestId('main-page');
  const shayerdLayer = await screen.findByTestId('shared-layer');
  // ASSERT
  expect(mainPage).toBeInTheDocument();
  expect(shayerdLayer).toBeInTheDocument();
});
