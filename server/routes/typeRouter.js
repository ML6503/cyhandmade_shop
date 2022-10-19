const Router = require('express');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const typeController = require('../controllers/typeController');
const router = new Router();

router.post('/', checkRoleMiddleware(), typeController.create);
router.get('/', typeController.getAll);

module.exports = router;
