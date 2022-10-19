const ApiError = require('../error/ApiError');
const tokenService = require('../services/tokenService');

module.exports = () => {
  return (req, _res, next) => {
    const OPTIONS = 'OPTIONS';
    const ADMIN = 'admin';

    if (req.method === OPTIONS) {
      next();
    }
    try {
      const authorizationHeader = req.headers.authorization;

      if (!authorizationHeader) {
        return next(ApiError.unauthorizedError());
      }
      const accessToken = authorizationHeader.split(' ')[1];

      if (!accessToken) {
        return next(ApiError.unauthorizedError());
      }

      const userData = tokenService.validateAccessToken(accessToken);

      if (userData.role !== ADMIN) {
        return next(ApiError.forbidden('You do not have permission to access.'));
      }

      req.user = userData;
      next();
    } catch (e) {
      return next(ApiError.unauthorizedError());
    }
  };
};
