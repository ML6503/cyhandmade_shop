const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const { createClient } = require('redis');
const path = require('path');
require('dotenv').config();
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const ApiError = require('./error/ApiError');

let redisClient = createClient({ legacyMode: true });
redisClient.connect().catch(console.error);
const REDIS_HOST = 'localhost';
const REDIS_PORT = 6379;

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(
    session({
        store: new RedisStore({ host: REDIS_HOST, port: REDIS_PORT, client: redisClient, ttl: 10800 }),
        saveUninitialized: false,
        secret: 'mysupersecret',
        resave: false,
        cookie: { maxAge: 180 * 60 * 1000 } // 3 hrs
    })
);
app.use((req, _res, next) => {
    if(!req.session) {
        return next(ApiError.internal('No session connection'));
    }
    next();
});
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Error handler should be last middleware
app.use(errorHandler);

module.exports = app;
