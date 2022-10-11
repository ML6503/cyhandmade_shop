const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const tokenService = require('../services/tokenService');

const OPTIONS = 'OPTIONS';

module.exports = (req, _res, next) => {
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

    if (!userData) {
      return next(ApiError.unauthorizedError());
    }

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.unauthorizedError());
  }
};
