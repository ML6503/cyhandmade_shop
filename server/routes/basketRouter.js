const Router = require('express');
const basketController = require('../controllers/basketController');

const router = new Router();

router.post('/', basketController.create);
router.get('/', basketController.getBasket);

router.get('/add-to-basket/:itemId', basketController.addToBasket);

module.exports = router;
