const { v4: uuidv4 } = require('uuid');
const { Basket, BasketDevice, User } = require('../models/modelsDb');
const ApiError = require('../error/ApiError');
const basketService = require('../services/basketService');

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
      //   include: [{ model: BasketItem, as: 'item' }],
    });
    return res.json(basket);
  }

  // async clearBasket(req, res, next) {
  //   const { userId } = req.params;
  //   if (!userId) {
  //     return next(ApiError.badRequest('No user id provided'));
  //   }
  //   const basket = await Basket.findOne({ where: { userId } });
  //   await BasketItem.destroy({ where: { basketId: basket.id } });

  //   return res.json(basket);
  // }

  async addToBasket(req, _res, next) {
    try {
      const { itemId } = req.params;
      const updatedBasket = await basketService.updateBasket(itemId);
      req.session.basket = updatedBasket;
      console.log('Session cart: ', req.session.basket);

    } catch(e) {
      next(e)
    }
  }
}

module.exports = new BasketController();
