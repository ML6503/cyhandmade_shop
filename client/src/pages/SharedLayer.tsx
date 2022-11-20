import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayer= () => {

    return (
        <div data-testid='shared-layer'>
            <Navbar/>
                <Outlet/>
             <section>
                <h5>Bottom section with Contacts</h5>
            </section>
        </div>
    );
};

export default SharedLayer;
