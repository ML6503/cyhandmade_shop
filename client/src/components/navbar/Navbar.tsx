import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import '../componentsStyle.css';
import { ShopContext } from 'index';
import { ButtomPaint } from './ButtomPaint';
import { LeftBrush } from './LeftBrush';
import { PaintDrip } from './PaintDrip';

interface ILink {
  path: string;
  href?: string;
  exact: boolean;
  text?: string;
  icon?: JSX.Element;
}

const NavBar: React.FC = observer(() => {
  let location = useLocation();
  const appContext = useContext(ShopContext);

  const publicLinks: Array<ILink> = [
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
      path: '/cart',
      exact: true,
      icon: <i className="fas fa-shopping-cart" aria-hidden="true"></i>,
    },
  ];

  const additionalLinks: Array<ILink> = appContext?.user.isAuth
    ? [
        {
          path: '/account',
          exact: true,
          text: 'Account',
        },
        {
          path: '/logout',
          exact: true,
          text: 'Logout',
        },
      ]
    : [
        {
          path: '/login',
          exact: true,
          text: 'Login',
        },
      ];

  let links = publicLinks.concat(additionalLinks);

  return (
    <div className="mr-auto d-flex justify-content-between sticky-top">
      <img src="./images/icon_13.png" className="img-fluid" />

      <LeftBrush />

      <div>
        <Navbar className="justify-content-end nav-span pt-3" variant="dark">
          {links.map((link) => (
            <Nav.Item className="pe-3">
              <Nav.Link
                href={link.path}
                className={location.pathname === link.path ? 'active-nav' : ''}
              >
                {link.text ? link.text : link.icon}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Navbar>
        <span className="buttom-brush-wrapper">
          <ButtomPaint />
          <span className="paint-drip-wrapper">
            <PaintDrip />
          </span>
        </span>
      </div>
    </div>
  );
});

export default NavBar;
