import { MAIN_ROUTE, ACCOUNT_ROUTE, CART_ROUTE } from '../utils/constants';
import { publicRoutes } from '../components/routes';

describe('Check all routes are exist', () => {
  test('check all public routes are exists', () => {
    const publicRoutesExpected = [MAIN_ROUTE, ACCOUNT_ROUTE, CART_ROUTE];

    const publicRoutesExist = publicRoutes
      .reduce((acc, currentArr) => acc + ',' + currentArr.path, '')
      .split(',');

    expect(publicRoutesExist.slice(1)).toEqual(publicRoutesExpected);
  });
});
