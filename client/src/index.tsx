import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <App  />
         </BrowserRouter>,
    );
} else {
    console.log('Not found app');
}