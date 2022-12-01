const { validationResult } = require('express-validator');

const ApiError = require('../error/ApiError');
const userService = require('../services/userService');
const tokenService = require('../services/tokenService');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest('Validation error.', errors.array()));
      }
      const { email, password, name, role } = req.body;

      const userData = await userService.registration(email, password, name, role);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: tokenService.refreshTokenDays * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const userData = await userService.login(email, password);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: tokenService.refreshTokenDays * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');

      res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);

      return res.redirect(process.env.CLENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const userData = await userService.refresh(refreshToken);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: tokenService.refreshTokenDays * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  // async check(req, res, next) {
  //     try {
  //         const { id } = req.query;
  //     if(!id) {

  //         return next(ApiError.badRequest('No user id'));
  //     }

  //         return res.json({ id });

  //     } catch (e) {
  //         return next(ApiError.internal('Server error'));
  //     }
  // }

  async getUsers(_req, res, next) {
    try {
      const users = await userService.getUsers();

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
