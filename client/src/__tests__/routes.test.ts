import {
  MAIN_ROUTE,
  ACCOUNT_ROUTE,
  CART_ROUTE,
  ADMIN_ROUTE,
  PRODUCT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from '../utils/constants';
import { authRoutes, publicRoutes } from '../components/routes';

describe('Check all routes are exist', () => {
  test('check all public routes are exists', () => {
    const publicRoutesExpected = [
      MAIN_ROUTE,
      PRODUCT_ROUTE + '/:id',
      CART_ROUTE,
      LOGIN_ROUTE,
      REGISTRATION_ROUTE,
    ];

    const publicRoutesExist = publicRoutes
      .reduce((acc, currentArr) => acc + ',' + currentArr.path, '')
      .split(',');

    expect(publicRoutesExist.slice(1)).toEqual(publicRoutesExpected);
  });

  test('check all auhorized routes are exists', () => {
    const authRoutesExpected = [ADMIN_ROUTE, ACCOUNT_ROUTE];

    const authRoutesExist = authRoutes
      .reduce((acc, currentArr) => acc + ',' + currentArr.path, '')
      .split(',');

    expect(authRoutesExist.slice(1)).toEqual(authRoutesExpected);
  });
});
