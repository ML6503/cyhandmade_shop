const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const session = require('express-session');
// const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const { createClient } = require('redis');
const path = require('path');
require('dotenv').config();
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const { REDIS_USER, REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, REDIS_DB_NUMBER } = process.env;

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
let client;
(async () => {
  // const redisEndpointUri = REDIS_ENDPOINT_URI
  //   ? REDIS_ENDPOINT_URI.replace(/^(redis\:\/\/)/, '')
  //   : `${REDIS_HOST}:${REDIS_PORT}`;

  // client = createClient(`redis://${redisEndpointUri}`, {
  //   password: REDIS_PASSWORD,
  //   legacyMode: true,
  // });

  client = createClient(
    // `redis://${REDIS_USER}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB_NUMBER}`,

    {
      // url: `redis://${REDIS_USER}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`,
      legacyMode: true,
    }
  );
  // client = createClient({
  //   url: 'redis://redis:6379',
  //   password: REDIS_PASSWORD,
  //   legacyMode: true,
  // });

  client.on('error', function (err) {
    console.error('Could not establish a connection with redis. ' + err);
    process.exit(0);
  });

  await client.connect().catch(console.error);
  console.log('REDIS is connected!!');
  // await client.set('basket', JSON.stringify({ basketId: 123, products: [] }));
  // await client.del('basket');
  // const value = await client.get('basket');
  // console.log(value);
})();

app.use(
  session({
    store: new RedisStore({
      host: REDIS_HOST,
      port: REDIS_PORT,
      client: client,
      ttl: 10800,
    }),
    saveUninitialized: false,
    secret: 'mysupersecret',
    resave: false,
    cookie: { maxAge: 180 * 60 * 1000 }, // 3 hrs
  })
);

app.use((req, _res, next) => {
  if (!req.session) {
    return next(ApiError.internal('No session connection'));
  }
  next();
});

// app.use((req, res, next) => {
//   res.locals.session = req.session;
//   next();
// });
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Error handler should be last middleware
app.use(errorHandler);

module.exports = app;
