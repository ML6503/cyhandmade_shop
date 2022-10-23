const { v4: uuidv4 } = require('uuid');
const { Basket, BasketDevice, User } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
  async create(req, res, next) {
    try {
      let { userId } = req.body;
      if (!userId) {
        return next(ApiError.badRequest('No user id provided'));
      }

      res.cookie('userId', userData.refreshToken, {
        maxAge: tokenService.refreshTokenDays * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true,
      });
      const basket = await Basket.create({
        userId,
      });

      await BasketDevice.create({ basketId: basket.id });
      return res.json(basket);
    } catch (e) {
      next(e.message);
    }
  }

  async getBasket(req, res, next) {
    const { userId } = req.body;
    if (!userId) {
      return next(ApiError.badRequest('No user id provided'));
    }
    const basket = await Basket.findOne({
      where: { userId },
      //   include: [{ model: BasketDevice, as: DEVICE }],
    });
    return res.json(basket);
  }

  async clearBasket(req, res, next) {
    const { userId } = req.body;
    if (!userId) {
      return next(ApiError.badRequest('No user id provided'));
    }
    const basket = await Basket.findOne({ where: { userId } });
    await BasketDevice.destroy({ where: { basketId: basket.id } });

    return res.json(basket);
  }
}

module.exports = new BasketController();
