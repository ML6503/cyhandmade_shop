const bcrypt = require('bcrypt');
const uuid = require('uuid');

const { User, Basket, Token } = require('../models/models');
const ApiError = require('../error/ApiError');
const mailService = require('./mailService');
const tokenService = require('./tokenService');
const UserDto = require('../dtos/userDto');
const { generateTokens } = require('./tokenService');

class UserService {
  async registration(email, password, role) {
    const candidate = await User.findOne({ where: { email: email } });

    if (candidate) {
      throw ApiError.badRequest('User with such email already exists.');
    }

    const hashedPassword = await bcrypt.hash(password, +process.env.SALT);

    const activationLink = uuid.v4();

    const user = await User.create({ email, role, password: hashedPassword, activationLink });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/user/activate/${activationLink}`
    );

    const basket = await Basket.create({ userId: user.id });

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async getTokensAndUserData(user) {
    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    if (!email || !password) {
      throw ApiError.badRequest('No user id or password');
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.internal('Password or email is incorrect. Try again.');
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      throw ApiError.internal('Password or email is incorrect. Try again.');
    }

    const tokensAndUserData = await this.getTokensAndUserData(user);

    return tokensAndUserData;
  }

  async logout(refreshToken) {
    if (!refreshToken) {
      throw ApiError.badRequest('No user token');
    }
    const token = await tokenService.removeToken(refreshToken);

    return token;
  }

  async activate(activationLink) {
    const user = await User.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.badRequest('No such link exists.');
    }
    user.isActivated = true;
    await user.save();
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.unauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.unauthorizedError();
    }

    const user = await User.findByPk(userData.id);
    if (!user) {
      throw ApiError.internal('No User in DB with id: ', userData.userId);
    }

    const tokensAndUserData = await this.getTokensAndUserData(user);

    return tokensAndUserData;
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

  async getUsers() {
    const users = await User.findAll();

    // if (!users) {
    //   return ApiError.internal('No users exists.');
    // }

    return users.map((u) => new UserDto(u));
  }
}

module.exports = new UserService();
