const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { Token } = require('../models/models');

class TokenService {
  refreshTokenDays = 30;
  maximumTokensLength = 5;

  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: '15m' });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, {
      expiresIn: `${this.refreshTokenDays}d`,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findAll({ where: { userId } });
    if (tokenData.length >= this.maximumTokensLength) {
      Token.destroy();
    }

    const thirtyDaysBackFromNow = new Date(
      new Date().setDate(new Date().getDate() - this.refreshTokenDays)
    );

    await Token.destroy({
      where: {
        createdAt: { [Op.gt]: thirtyDaysBackFromNow },
      },
    });

    const token = await Token.create({ userId, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
