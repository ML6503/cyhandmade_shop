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

  async deleteUnrequiredTokens(userId) {
    // check if  tokens morew than maximum alowed - delete them
    const allTokens = await Token.findAll({ where: { userId } });
    if (allTokens.length >= this.maximumTokensLength) {
      await Token.destroy({ where: { userId } });
    }
    //  check old tokens and delete them
    const thirtyDaysBackFromNow = new Date(
      new Date().setDate(new Date().getDate() - this.refreshTokenDays)
    );

    await Token.destroy({
      where: {
        createdAt: { [Op.gt]: thirtyDaysBackFromNow },
      },
    });
  }

  async saveToken(userId, refreshToken) {
    await this.deleteUnrequiredTokens(userId);

    const tokenData = await Token.findOne({ where: { userId } });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
    }

    const token = await Token.create({ userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({ where: { refreshToken } });
    return tokenData;
  }
}

module.exports = new TokenService();
