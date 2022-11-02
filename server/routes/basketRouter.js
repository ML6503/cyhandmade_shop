const Router = require('express');
const basketController = require('../controllers/basketController');

const router = new Router();

router.get('/', basketController.getBasket);

router.post('/add/:itemId', basketController.addToBasket);

router.delete('/remove/:itemId', basketController.removeFromBasket);

module.exports = router;
