import Account from 'pages/account';
import Admin from 'pages/Admin';
import Cart from 'pages/cart';
import MainPage from 'pages/main';
import { ACCOUNT_ROUTE, ADMIN_ROUTE, CART_ROUTE, MAIN_ROUTE } from 'utils/constants';

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
    path: CART_ROUTE,
    exact: true,
    element: <Cart />,
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
