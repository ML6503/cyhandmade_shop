import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayer from './SharedLayer';
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
            path: 'account',
            exact: true,
            element: <Account/>
        },
        {
            path: 'cart',
            exact: true,
            element: <Cart/>
        },
    ];

return (
    <main>
        <Routes>
            <Route path='/' element={<SharedLayer />}>
            
                {    
                    routes.map((r) => <Route path={r.path} element={r.element}/>)
                }
            </Route>
        </Routes>
    </main>
);
};