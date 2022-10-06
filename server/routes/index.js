const Router = require('express');

const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

module.exports = router;
