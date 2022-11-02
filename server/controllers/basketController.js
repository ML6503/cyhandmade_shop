const ApiError = require('../error/ApiError');
const basketService = require('../services/basketService');

class BasketController {
  // async create(req, res, next) {
  //   try {
  //     let { userId } = req.body;
  //     if (!userId) {
  //       return next(ApiError.badRequest('No user id provided'));
  //     }

  //     res.cookie('userId', userData.refreshToken, {
  //       maxAge: tokenService.refreshTokenDays * 24 * 60 * 60 * 1000,
  //       httpOnly: true,
  //       // secure: true,
  //     });
  //     const basket = await Basket.create({
  //       userId,
  //     });

  //     await BasketDevice.create({ basketId: basket.id });
  //     return res.json(basket);
  //   } catch (e) {
  //     next(e.message);
  //   }
  // }

  async getBasket(req, res, next) {
    try {
      const sessionBasket = req.session.basket ? req.session.basket : {};
      return res.json(sessionBasket);
    } catch (e) {
      next(e);
    }
  }

  async clearBasket(req, res, _next) {
    await req.session.destroy();

    return res.code(200);
  }

  async addToBasket(req, res, next) {
    try {
      const { itemId } = req.params;
      if (!itemId) {
        return next(ApiError.badRequest('No item id provided'));
      }
      const sessionBasket = req.session.basket ? req.session.basket : {};
      const updatedBasket = await basketService.addToBasket(itemId, sessionBasket);
      req.session.basket = updatedBasket;

      return res.json(updatedBasket);
    } catch (e) {
      next(e);
    }
  }

  async removeFromBasket(req, res, next) {
    try {
      const { itemId } = req.params;
      if (!itemId) {
        return next(ApiError.badRequest('No item id provided'));
      }
      const sessionBasket = req.session.basket;
      if(!sessionBasket) {
        return next(ApiError.badRequest('No basket in session'));
        
      }
      const updatedBasket = await basketService.removeFromBasket(itemId);
      
      req.session.basket = updatedBasket;

      return res.json(updatedBasket);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BasketController();
