const Router = require('express');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const itemController = require('../controllers/itemController');
const router = new Router();

router.post('/', checkRoleMiddleware(), itemController.create);
router.get('/', itemController.getAll);
router.get('/:id', itemController.getOne);
router.post('/:id', checkRoleMiddleware(), itemController.deleteOne);

module.exports = router;
