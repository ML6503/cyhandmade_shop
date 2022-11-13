import React from 'react';

import NavBar from './Navbar';
import MainPage  from './main';
import Account from './account';
import Cart from './cart';

export const App = () => {

    const routes = [
        {
            path: '/',
            exact: true,
            element: <MainPage/>
        },
        {
            path: '/account',
            exact: true,
            element: <Account/>
        },
        {
            path: '/cart',
            exact: true,
            element: <Cart/>
        },
    ];

return (
    <main>
       
        <NavBar />
        <MainPage />
   
    </main>
);
};