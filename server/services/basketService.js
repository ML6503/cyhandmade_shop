const BasketModel = require('../models/basketModel');
const itemService = require('./itemService');


class BasketService {

    async updateBasket(itemId) {
        const basket = new BasketModel(req.session.basket ? req.session.basket : { });

        const item = await itemService.findOne(itemId);
        basket.add(item, item.id);
        return basket;
    }
}

module.exports = new BasketService();
