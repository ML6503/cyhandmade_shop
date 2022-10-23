const request = require('supertest');
const app = require('../index');

describe('GET /api/basket', () => {
  it('GET /basket return basket details', async () => {
    const loginResponse = await request(app).post('/api/user/login').send({
      email: 'test@test.com',
      password: 'test',
    });
    const userData = loginResponse.body;

    const response = await request(app).get('/api/basket').send({
      userId: userData.user.id,
    });

    await expect(response.status).toEqual(200);
    await expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        userId: expect.any(Number),
      })
    );
  });
});
