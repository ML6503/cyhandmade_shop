const BasketModel = require('../models/basketModel');
const itemService = require('./itemService');

class BasketService {
  async addToBasket(itemId, sessionBasket) {
    const basket = new BasketModel(sessionBasket);

    const item = await itemService.findOne(itemId);
    if (item) {
      basket.add(item, item.id);
    }
    return basket;
  }
}

module.exports = new BasketService();
