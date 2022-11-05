const request = require('supertest');
const Faker = require('Faker');
const app = require('../index');
const db = require('../db');

// TODO create test DB
// https://jaygould.co.uk/2020-07-28-jest-sequelize-testing-dedicated-database/

describe('GET /api/user/users', () => {
  const testUserEmail = Faker.Internet.email();

  beforeAll(async () => {
    let shopDb = db;

    await shopDb.sequelize.sync({ force: true });

    await request(app).post('/api/user/registration').send({
      email: testUserEmail,
      password: 'test',
      role: 'admin',
    });
  });

  it.skip('GET /users returns array of users with authorization by accessToken', async () => {
    const loginResponse = await request(app).post('/api/user/login').send({
      email: testUserEmail,
      password: 'test',
    });
    const userData = loginResponse.body;
    const token = userData.accessToken;

    const response = await request(app)
      .get('/api/user/users')
      .auth(token, { type: 'bearer' });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          email: expect.any(String),
          isActivated: expect.any(Boolean),
          role: expect.any(String),
        }),
      ])
    );
  });

  it.skip('GET /users returns unauthorized error without accessToken', async () => {
    const response = await request(app).get('/api/user/users');

    expect(response.status).toEqual(401);
  });
});

describe('POST /api/user/login', () => {
  it.skip('POST /login returns tokens', async () => {
    return () =>
      request
        .post('/api/user/login')
        .send({
          email: testUserEmail,
          password: 'test',
        })
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(
            expect.objectContaining({
              accessToken: expect.any(String),
              refreshToken: expect.any(String),
            })
          );
        });
  });

  afterAll(async () => {
    await shopDb.sequelize.close();
  });
});
