import Account from 'pages/account';
import Admin from 'pages/Admin';
import Auth from 'pages/Auth';
import Cart from 'pages/cart';
import MainPage from 'pages/main';
import Product from 'pages/product';
import {
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PRODUCT_ROUTE,
  PRODUCTS_ROUTE,
  REGISTRATION_ROUTE,
  CONTACT_ROUTE,
} from 'utils/constants';

export interface IRoute {
  path: string;
  exact: boolean;
  element: JSX.Element;
}

export const publicRoutes: IRoute[] = [
  {
    path: MAIN_ROUTE,
    exact: true,
    element: <MainPage />,
  },
  {
    path: CONTACT_ROUTE,
    exact: true,
    element: <MainPage />,
  },
  {
    path: PRODUCTS_ROUTE,
    exact: true,
    element: <MainPage />,
  },

  {
    path: PRODUCT_ROUTE + '/:id',
    exact: true,
    element: <Product />,
  },
  {
    path: CART_ROUTE,
    exact: true,
    element: <Cart />,
  },
  {
    path: LOGIN_ROUTE,
    exact: true,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    exact: true,
    element: <Auth />,
  },
];

export const authRoutes: IRoute[] = [
  {
    path: ADMIN_ROUTE,
    exact: true,
    element: <Admin />,
  },
  {
    path: ACCOUNT_ROUTE,
    exact: true,
    element: <Account />,
  },
];
