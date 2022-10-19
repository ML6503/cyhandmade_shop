const Router = require('express');

const itemRouter = require('./itemRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const basketRouter = require('./basketRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/item', itemRouter);
router.use('/basket', basketRouter);

module.exports = router;
