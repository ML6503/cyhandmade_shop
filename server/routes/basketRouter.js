const Router = require('express');
const basketController = require('../controllers/basketController');

const router = new Router();

router.get('/', basketController.getBasket);

router.post('/add-to-basket/:itemId', basketController.addToBasket);

module.exports = router;
