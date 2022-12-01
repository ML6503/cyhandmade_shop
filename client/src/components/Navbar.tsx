import React from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import './style.css';

const NavBar = () => {
  let location = useLocation();
  console.log('LOCATION!', location);
  const links = [
    {
      path: '/',
      href: '#home',
      exact: true,
      text: 'Handmade Cyprus',
    },
    {
      path: '/products',
      href: '#products',
      exact: true,
      text: 'Products',
    },
    {
      path: '/contact',
      href: '#contact',
      exact: true,
      text: 'Contacts',
    },
    {
      path: '/account',
      exact: true,
      text: 'Account',
    },
    {
      path: '/cart',
      exact: true,
      text: 'Cart',
    },
    {
      path: '/logout',
      exact: true,
      text: 'Logout',
    },
  ];

  return (
    // <nav>
    //   <ul>
    //     {links.map((link, index) => (
    //       <li key={index}>
    //         <Link to={link.path}>{link.text}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <Navbar className="justify-content-end" variant="dark" sticky="top">
      {links.map((link) => (
        <Nav.Item className="pe-3">
          <Nav.Link
            href={link.path}
            className={location.pathname === link.path ? 'active-nav' : ''}
          >
            {link.text}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Navbar>
  );
};

export default NavBar;
