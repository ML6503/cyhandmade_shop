const { validationResult } = require('express-validator');

// const ApiError = require('../error/ApiError');

const userService = require('../services/userService');
const tokenService = require('../services/tokenService');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest('Validation error.', errors.array()));
      }
      const { email, password, role } = req.body;

      const userData = await userService.registration(email, password, role);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: tokenService.refreshTokenDays * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest('No user id or password'));
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(ApiError.internal('No such user exists.'));
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(ApiError.internal('Password is incorrect. Try again.'));
      }
      const token = generateJWT(user.id, user.email, user.role);

      return res.json({ token });
    } catch (e) {
      console.log(e);
    }
  }

  async logout(req, res, next) {
    try {
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
      const users = await User.findAll();

      if (!users) {
        return next(ApiError.internal('No users exists.'));
      }

      return res.json({ users });
    } catch (e) {
      return next(ApiError.internal('Server error'));
    }
  }
}

module.exports = new UserController();
