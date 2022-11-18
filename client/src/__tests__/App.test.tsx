import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '../components/App';


test('App loads and has main page and shared layer components', async () => {
  // ARRANGE
  render(
  <BrowserRouter>
        <App />
      </BrowserRouter>
 );

  // ACT
  const mainPage = await screen.findByTestId('main-page');
  const shayerdLayer = await screen.findByTestId('shared-layer');
  // ASSERT
  expect(mainPage).toBeInTheDocument();
  expect(shayerdLayer).toBeInTheDocument();
  
});
