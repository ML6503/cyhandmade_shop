const sequelize = require('../db');
const models = require('../models/modelsDb');
const Faker = require('Faker');

// https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application

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

  test('get user', async () => {
    expect.assertions(2);
    const user = await models.User.findOne({
      where: {
        email: testUserEmail,
      },
    });

    expect(user).not.toBeNull();
    expect(user.role).toEqual('USER');
  });

  test('delete user', async () => {
    expect.assertions(1);
    await models.User.destroy({
      where: {
        email: testUserEmail,
      },
    });

    const user = await models.User.findOne({
      where: {
        email: testUserEmail,
      },
    });

    expect(user).toBeNull();
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
