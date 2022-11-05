const { Sequelize } = require('sequelize');

const dbHost =
  process.env.NODE_ENV === 'test'
    ? process.env.DB_HOST_TEST
    : process.env.DB_HOST;

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true',
    },
    host: dbHost || 'localhost',
    port: process.env.DB_PORT,
    logging: false,
  }
);
