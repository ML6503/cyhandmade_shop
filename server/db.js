const { Sequelize } = require('sequelize');

const dbHost =
  process.env.NODE_ENV === 'test'
    ? process.env.DB_HOST_TEST
    : process.env.DB_HOST;

module.exports = new Sequelize(
  //   process.env.DB_NAME,
  process.env.DB_SCHEMA || 'postgres',
  process.env.DB_USER,
  process.env.DB_PASSWORD || '',
  {
    host: dbHost || 'localhost',
    port: process.env.DB_PORT,
    dialect: 'postgres',
    // dialectOptions: {
    //   ssl: process.env.DB_SSL === 'true',
    // },

    // logging: false,
  }
);
