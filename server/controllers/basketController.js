const { Basket, BasketDevice } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
  DEVICE = 'device';

  async create(req, res, next) {
    const { userId } = req.body;
    if (!userId) {
      return next(ApiError.badRequest('No user id provided'));
    }

    const basket = await Basket.create({
      userId,
      //   include: [{ model: BasketDevice, as: this.DEVICE }],
    });

    await BasketDevice.create({ basketId: basket.id });
    return res.json(basket);
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
