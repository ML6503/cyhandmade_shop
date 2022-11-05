const sequelize = require('../db');
const models = require('../models/modelsDb');
const Faker = require('Faker');

describe('Database user model tests', () => {
  beforeAll(async () => {
    // await sequelize.authenticate();
    await sequelize.sync({ force: true });
  });

  const testUserEmail = Faker.Internet.email();

  test('create user', async () => {
    expect.assertions(2);
    const user = await models.User.create({
      email: testUserEmail,
      password: 'password',
    });
    expect(user.role).toEqual('USER');
    expect(user.id).toEqual(expect.any(String));
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
