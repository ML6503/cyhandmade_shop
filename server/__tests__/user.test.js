const request = require('supertest');
const app = require('../index');
const loginUser = require('./utils');

// let userData = {};

// let token;

// beforeAll(async () => {
//   await loginUser(userData);
//   token = userData.accessToken;
// });

describe('GET /api/user/users', () => {
  it('GET /users returns array of users with authorization by accessToken', async () => {
    const loginResponse = await request(app).post('/api/user/login').send({
      email: 'test@test.com',
      password: 'test',
    });
    const userData = loginResponse.body;
    const token = userData.accessToken;

    const response = await request(app).get('/api/user/users').auth(token, { type: 'bearer' });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          isActivated: expect.any(Boolean),
          role: expect.any(String),
        }),
      ])
    );
  });

  it('GET /users returns unauthorized error without accessToken', async () => {
    const response = await request(app).get('/api/user/users');

    expect(response.status).toEqual(401);
  });
});

describe('POST /api/user/login', () => {
  it('POST /login returns tokens', async () => {
    return () =>
      request
        .post('/api/user/login')
        .send({
          email: 'test@test.com',
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
});
