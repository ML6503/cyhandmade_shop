import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links = [
    {
        path: "/",
        exact: true,
        text: 'Handmade Cyprus'
    },
    {
        path: "/",
        href: "#products",
        exact: true,
        text: 'Products'
    },
    {
        path: "/",
        href: "#contact",
        exact: true,
        text: 'Contact'
    },
    {
        path: "/account",
        exact: true,
        text: 'Account'
    },
    {
        path: "/cart",
        exact: true,
        text: 'Cart'
    },
    {
        path: "/",
        exact: true,
        text: 'Logout'
    },
    ];

    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.text}</Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
