import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import SharedLayer from '../pages/SharedLayer';


test('App loads and has main page and shared layer components', async () => {
  // ARRANGE
  render(
  <BrowserRouter>
        < SharedLayer/>
      </BrowserRouter>
 );

  // ACT
  await screen.findByRole('link', { name: 'Cart'});
  await screen.findByRole('link', { name: 'Account'});
  await screen.findByRole('link', { name: 'Logout'});
  await screen.findByRole('link', { name: 'Products'});
  await screen.findByRole('link', { name: 'Contact'});
  await screen.findByRole('link', { name: 'Handmade Cyprus'});
  
  // ASSERT
  const linksNumber = 6;
  expect(screen.getAllByRole('link').length).toBe(linksNumber);
  
});
